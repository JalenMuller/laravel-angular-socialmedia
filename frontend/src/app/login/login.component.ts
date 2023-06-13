import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { ActivatedRoute, Params } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  alertClass = 'bg-blue-200 text-gray-800';
  alertMsg = '';

  constructor(private userService: UserService, private route: ActivatedRoute) {
    route.queryParams.subscribe((params: Params) => {
      if (params['status'] === 'expired') {
        this.alertMsg = 'You need to log in again.';
      }
    });
  }
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required]);

  registerForm = new FormGroup({
    email: this.email,
    password: this.password,
  });
  submit() {
    const values = this.registerForm.value;
    console.log(values);
    this.userService.login(values.email!, values.password!);
  }

  ngOnInit(): void {}
}
