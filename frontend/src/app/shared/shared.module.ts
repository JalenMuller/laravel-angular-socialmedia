import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './modal/modal.component';
import { AlertComponent } from './alert/alert.component';
import { InputComponent } from './input/input.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ModalComponent, AlertComponent, InputComponent],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [ModalComponent, AlertComponent, InputComponent],
})
export class SharedModule {}
