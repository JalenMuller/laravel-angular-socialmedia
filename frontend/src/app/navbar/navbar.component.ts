import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';
import pages from '../constants/pages';
import { Observable, Subscription, first, last } from 'rxjs';
import { UserService } from '../services/user.service';
import apiConfig from '../constants/apiConfig';
import IUser from '../models/user.model';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  showNavDropdown = false;
  showProfileDropdown = false;
  pages = pages;
  baseUrl = apiConfig.baseUrl;
  user: IUser | null = null;

  constructor(public auth: AuthService, public userService: UserService) {
    userService.user.pipe(first()).subscribe((value) => {
      this.user = value;
    });
  }
  ngOnInit(): void {}
  toggleProfileDropdown() {
    this.showProfileDropdown = !this.showProfileDropdown;
  }
  toggleNavDropdown() {
    this.showNavDropdown = !this.showNavDropdown;
  }
}
