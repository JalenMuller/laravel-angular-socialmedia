import { ProfileService } from './../../services/profile.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';
import apiConfig from 'src/app/constants/apiConfig';
import IProfile from 'src/app/models/profile.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  profile: IProfile | null = null;
  currentUser = false;
  baseUrl = apiConfig.baseUrl;
  constructor(
    private profileService: ProfileService,
    private modalService: ModalService,
    private route: ActivatedRoute
  ) {}
  ngOnInit(): void {
    const profileUrl = this.route.snapshot.paramMap.get('profile');
    if (profileUrl) {
      const res = this.profileService.getProfile(profileUrl);
      res.subscribe((res) => {
        this.profile = res.profile;
        // console.log(this.profile);
        this.currentUser = res.currentUser;
      });
    }
  }
  editProfile() {
    this.modalService.toggleModal('edit-profile');
  }
  newPost() {
    this.modalService.toggleModal('new-post');
  }
  changeAvatar() {
    this.modalService.toggleModal('avatar');
  }
}
