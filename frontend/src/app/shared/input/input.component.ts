import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
})
export class InputComponent {
  @Input() control: FormControl = new FormControl();
  @Input() inputName = 'field';
  @Input() type = 'text';
  @Input() placeholder = '';
  @Input() format = '';
  @Input() classNames = '';
  invalid = false;
  constructor() {}

  checkErrors() {
    if (this.control.touched && this.control.dirty && this.control.errors) {
      this.invalid = true;
    } else {
      this.invalid = false;
    }
  }
}
