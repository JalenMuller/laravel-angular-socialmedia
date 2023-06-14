import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';
import pages from '../constants/pages';
import { Observable, Subscription } from 'rxjs';
import { UserService } from '../services/user.service';
import apiConfig from '../constants/apiConfig';

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

  constructor(public auth: AuthService, public user: UserService) {}
  ngOnInit(): void {}
  toggleProfileDropdown() {
    this.showProfileDropdown = !this.showProfileDropdown;
  }
  toggleNavDropdown() {
    this.showNavDropdown = !this.showNavDropdown;
  }
}
