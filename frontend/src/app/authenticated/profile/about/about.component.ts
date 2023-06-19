import { Component, Input } from '@angular/core';
import IProfile from 'src/app/models/profile.model';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent {
  @Input() profile: IProfile | null = null;

  constructor() {}
}
