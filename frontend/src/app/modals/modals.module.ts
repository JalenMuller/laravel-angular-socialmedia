import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AvatarModalComponent } from './avatar-modal/avatar-modal.component';
import { SharedModule } from '../shared/shared.module';
import { EditProfileModalComponent } from './edit-profile-modal/edit-profile-modal.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NewPostModalComponent } from './new-post-modal/new-post-modal.component';

@NgModule({
  declarations: [
    AvatarModalComponent,
    EditProfileModalComponent,
    NewPostModalComponent,
  ],
  imports: [CommonModule, SharedModule, ReactiveFormsModule, FormsModule],
  exports: [
    AvatarModalComponent,
    EditProfileModalComponent,
    NewPostModalComponent,
  ],
})
export class ModalsModule {}
