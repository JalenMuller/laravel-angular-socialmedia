import IUser from 'src/app/models/user.model';
import { ProfileService } from './../../services/profile.service';
import { Component } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent {
  profile: IUser | null = null;
  currentUser = false;
  constructor(
    private profileService: ProfileService,
    private modalService: ModalService
  ) {
    const res = this.profileService.getProfile('jalen-muller-6483b3a1b134a');
    res.subscribe((res) => {
      this.profile = res.user;
      this.currentUser = res.currentUser;
    });
  }

  changeAvatar() {
    console.log('avatar');
    this.modalService.toggleModal('avatar');
  }
}
