import { Component } from '@angular/core';
import apiConfig from 'src/app/constants/apiConfig';
import IUser from 'src/app/models/user.model';
import { ModalService } from 'src/app/services/modal.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-new-post-modal',
  templateUrl: './new-post-modal.component.html',
  styleUrls: ['./new-post-modal.component.css'],
})
export class NewPostModalComponent {
  baseUrl = apiConfig.baseUrl;
  user: any = null;
  constructor(public modal: ModalService, private userService: UserService) {
    this.user = this.userService.user;
  }

  ngOnInit(): void {
    this.modal.register('new-post');
  }
  ngOnDestroy(): void {
    this.modal.unregister('new-post');
  }
}
