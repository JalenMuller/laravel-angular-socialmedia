import { UserService } from './../services/user.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RegisterValidators } from '../validators/register-validators';
import months from '../constants/months';
import IUser from '../models/user.model';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  inSubmission = false;
  alertClass = '';
  alertMsg = '';
  days: number[] = [];
  months = months;
  years: number[] = [];

  constructor(private userService: UserService) {
    this.days = Array(31)
      .fill(0)
      .map((x, i) => i + 1);
    this.years = [...Array(2023 - 1905 + 1).keys()].map((x) => x + 1905);
  }

  first_name = new FormControl('', [
    Validators.required,
    Validators.minLength(2),
  ]);
  last_name = new FormControl('', [
    Validators.required,
    Validators.minLength(2),
  ]);
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [
    Validators.required,
    Validators.minLength(8),
  ]);
  confirm_password = new FormControl('', Validators.required);

  day = new FormControl('', Validators.required);
  month = new FormControl('', Validators.required);
  year = new FormControl('', Validators.required);

  gender = new FormControl('', Validators.required);

  registerForm = new FormGroup(
    {
      first_name: this.first_name,
      last_name: this.last_name,
      email: this.email,
      password: this.password,
      confirm_password: this.confirm_password,
      day: this.day,
      month: this.month,
      year: this.year,
      gender: this.gender,
    },
    [RegisterValidators.match('password', 'confirm_password')]
  );

  ngOnInit(): void {
    // this.day.setValue(-1);
    // this.month.setValue(-1);
    // this.year.setValue(-1);
  }
  setDay($event: any) {
    console.log($event);
  }
  async submit() {
    const values = this.registerForm.value;

    const birthday = Date.parse(
      `${values.month} ${values.day}, ${values.year}`
    );
    if (!birthday) {
      return;
    }

    const body: IUser = {
      first_name: values.first_name!,
      last_name: values.last_name!,
      email: values.email!,
      password: values.password!,
      birthday: birthday,
      gender: 'M',
    };

    this.userService.register(body);
  }
}
