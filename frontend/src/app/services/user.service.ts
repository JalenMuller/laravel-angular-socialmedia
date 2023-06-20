import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import apiConfig from '../constants/apiConfig';
import IUser from '../models/user.model';
import { ProfileService } from './profile.service';
import { BehaviorSubject, Subject } from 'rxjs';
@Injectable({ providedIn: 'root' })
export class UserService {
  user = new Subject<IUser>();

  constructor(
    private http: HttpClient,
    private router: Router,
    private route: ActivatedRoute,
    private profileService: ProfileService
  ) {
    this.fetchUser();
  }
  headers: HttpHeaders = new HttpHeaders({
    Authorization: `Bearer ${localStorage.getItem('token')}`,
  });
  async login(email: string, password: string) {
    const registerRequest = this.http.post(`${apiConfig.apiUrl}/user/login`, {
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
      `${apiConfig.apiUrl}/user/register`,
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
  async fetchUser() {
    const headers = this.headers;
    const fetchedUser = this.http.get(`${apiConfig.apiUrl}/user/get`, {
      headers,
    });
    fetchedUser.subscribe({
      next: (value: any) => {
        this.user.next(value);
      },
      error: (e) => {
        console.log(e);
      },
    });
  }
  async uploadAvatar(avatar: File) {
    let headers = this.headers;
    let formData: any = new FormData();
    formData.append('avatar', avatar);

    console.log(formData);
    const avatarRequest = this.http.post(
      `${apiConfig.apiUrl}/profile/update-avatar`,
      formData,
      { headers }
    );
    avatarRequest.subscribe({
      next: (value: any) => {
        setTimeout(() => window.location.reload(), 1000);
      },
      error: (e) => {
        console.log(e);
      },
    });
  }
}
