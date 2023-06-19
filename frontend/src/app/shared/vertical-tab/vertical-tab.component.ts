import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-vertical-tab',
  templateUrl: './vertical-tab.component.html',
  styleUrls: ['./vertical-tab.component.css'],
})
export class VerticalTabComponent {
  @Input() tabTitle = '';
  @Input() active = false;

  constructor() {}
}
