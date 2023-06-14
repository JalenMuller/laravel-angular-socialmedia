import { lastValueFrom, filter, map, switchMap, of } from 'rxjs';
import { Injectable, OnInit } from '@angular/core';
import { UserService } from './user.service';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import apiConfig from '../constants/apiConfig';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public authenticated = false;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private http: HttpClient
  ) {
    this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        map((event) => this.route.firstChild),
        switchMap((route) => route?.data ?? of({ authOnly: false }))
      )
      .subscribe((data) => {
        if (data?.authOnly) {
          this.isAuthenticated();
        }
      });
  }
  async isAuthenticated() {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    });
    const request = this.http.get(`${apiConfig.apiUrl}/check-token`, {
      headers,
    });
    const res = await lastValueFrom(request).catch(() => {
      return false;
    });

    if (res) {
      this.authenticated = true;
      return true;
    } else {
      this.router.navigate(['/login'], { queryParams: { status: 'expired' } });
      return false;
    }
  }
}
