import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-add-input',
  templateUrl: './add-input.component.html',
  styleUrls: ['./add-input.component.css'],
})
export class AddInputComponent implements OnInit {
  @Input() control: FormControl = new FormControl();
  @Input() field = 'Add a';
  @Input() icon = '';
  @Input() value: string = '';
  state: 'set' | 'add' | 'edit' = 'add';

  ngOnInit(): void {
    if (this.value !== '') {
      this.state = 'set';
      this.control.setValue(this.value);
    }
  }
  setState(newState: 'set' | 'add' | 'edit') {
    this.state = newState;
    return false;
  }
  handleKeydown($event: Event) {
    // event not available on keyup which is
    // why we need a separate function to handle enter
    const pressedKey = ($event as KeyboardEvent).key;
    if (pressedKey === 'Enter') {
      $event.preventDefault();
      return this.save();
    }
  }
  setValue($event: Event) {
    this.value = ($event.target as HTMLInputElement).value;
  }
  deleteValue() {
    this.value = '';
    this.control.setValue('');
    this.state = 'add';
  }
  save() {
    if (this.value === '') {
      this.setState('add');
    } else {
      this.setState('set');
    }
  }
}

// states
// set: display value that's already set
// add: display add button for value that doesn't exist
// edit: display input box to set the value
