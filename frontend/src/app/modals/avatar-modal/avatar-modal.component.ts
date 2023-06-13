import { UserService } from './../../services/user.service';
import { Component, Input } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-avatar-modal',
  templateUrl: './avatar-modal.component.html',
  styleUrls: ['./avatar-modal.component.css'],
})
export class AvatarModalComponent {
  constructor(public modal: ModalService, private userService: UserService) {}
  @Input() avatar: string = '/assets/images/user.svg';

  upload() {
    
  }

  ngOnInit(): void {
    this.modal.register('avatar');
  }
  ngOnDestroy(): void {
    this.modal.unregister('avatar');
  }
}
