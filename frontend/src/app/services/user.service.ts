import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import apiConfig from '../constants/apiConfig';
import IUser from '../models/user.model';
@Injectable({ providedIn: 'root' })
export class UserService {
  user: IUser | null = null;

  constructor(
    private http: HttpClient,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.fetchUser();
  }

  async login(email: string, password: string) {
    const registerRequest = this.http.post(`${apiConfig.baseUrl}/user/login`, {
      email,
      password,
    });
    registerRequest.subscribe({
      next: (value: any) => {
        console.log(value);
        localStorage.setItem('token', value.token);
        this.router.navigate(['/home']);
      },
      error: (e) => {
        console.log(e);
      },
    });
  }
  async register(body: IUser) {
    const registerRequest = this.http.post(
      `${apiConfig.baseUrl}/user/register`,
      body
    );
    registerRequest.subscribe({
      next: (value: any) => {
        console.log(value.token);
        localStorage.setItem('token', value.token);
        this.router.navigate(['/home']);
      },
      error: (e) => {
        console.log(e);
      },
    });
  }
  async uploadAvatar(avatar: File) {
    const registerRequest = this.http.post(
      `${apiConfig.baseUrl}/user/update-avatar`,
      avatar
    );
    registerRequest.subscribe({
      next: (value: any) => {
        console.log(value);
      },
      error: (e) => {
        console.log(e);
      },
    });
  }
  async fetchUser() {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });

    const fetchedUser = this.http.get(`${apiConfig.baseUrl}/user/get`, {
      headers,
    });
    fetchedUser.subscribe({
      next: (value: any) => {
        // console.log(value);
        this.user = value;
      },
      error: (e) => {
        console.log(e);
      },
    });
  }
  // getUser(): Observable<any> {
  //   return this.user$;
  // }
}
