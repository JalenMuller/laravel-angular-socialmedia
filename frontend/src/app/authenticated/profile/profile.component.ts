import { ProfileService } from './../../services/profile.service';
import { Component, OnInit } from '@angular/core';
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
  ) {
    const profileUrl = this.route.snapshot.paramMap.get('profile');
    if (profileUrl) {
      const res = this.profileService.getProfile(profileUrl);
      res.subscribe((res) => {
        this.profile = res.profile;
        this.currentUser = res.currentUser;
      });
    }
  }
  ngOnInit(): void {
    console.log(this.route.snapshot.paramMap.get('profile'));
  }

  changeAvatar() {
    console.log('avatar');
    this.modalService.toggleModal('avatar');
  }
}
