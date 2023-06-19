import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import IProfile from 'src/app/models/profile.model';
import { ModalService } from 'src/app/services/modal.service';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-edit-profile-modal',
  templateUrl: './edit-profile-modal.component.html',
  styleUrls: ['./edit-profile-modal.component.css'],
})
export class EditProfileModalComponent {
  @Output() update = new EventEmitter();
  @Input() profile: IProfile | null = null;

  constructor(
    public modal: ModalService,
    private profileService: ProfileService
  ) {}

  bio = new FormControl('');
  first_name = new FormControl('');
  last_name = new FormControl('');
  workplace = new FormControl('');
  high_school = new FormControl('');
  college = new FormControl('');
  country = new FormControl('');
  city = new FormControl('');
  relationship_status = new FormControl('');
  phone_nr = new FormControl('');
  email = new FormControl('');
  website = new FormControl('');

  profileForm = new FormGroup({
    bio: this.bio,
    first_name: this.first_name,
    last_name: this.last_name,
    workplace: this.workplace,
    high_school: this.high_school,
    college: this.college,
    country: this.country,
    city: this.city,
    relationship_status: this.relationship_status,
    phone_nr: this.phone_nr,
    email: this.email,
    website: this.website,
  });
  submit() {
    const formValues = this.profileForm.value;
    const res = this.profileService.updateProfile(formValues);
    res.subscribe((res) => {
      console.log(res);
      this.update.emit();
    });
  }

  ngOnInit(): void {
    this.modal.register('edit-profile');
  }
  ngOnDestroy(): void {
    this.modal.unregister('edit-profile');
  }
}
