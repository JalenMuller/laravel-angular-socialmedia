import { UserService } from './../../services/user.service';
import { Component, Input } from '@angular/core';
import { last } from 'rxjs';
import apiConfig from 'src/app/constants/apiConfig';
import IUser from 'src/app/models/user.model';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-avatar-modal',
  templateUrl: './avatar-modal.component.html',
  styleUrls: ['./avatar-modal.component.css'],
})
export class AvatarModalComponent {
  baseUrl = apiConfig.baseUrl;
  user: IUser | null = null;
  constructor(public modal: ModalService, public userService: UserService) {
    userService.user.pipe(last()).subscribe((value) => (this.user = value));
  }

  openInput() {
    document.getElementById('avatar-input')?.click();
  }
  upload($event: Event) {
    const input = $event.currentTarget as HTMLInputElement;
    let fileList: FileList | null = input.files;
    if (fileList) {
      this.userService.uploadAvatar(fileList[0]);
    }
  }

  ngOnInit(): void {
    this.modal.register('avatar');
  }
  ngOnDestroy(): void {
    this.modal.unregister('avatar');
  }
}
