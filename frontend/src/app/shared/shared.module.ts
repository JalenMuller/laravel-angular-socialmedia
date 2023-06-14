import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './modal/modal.component';
import { AlertComponent } from './alert/alert.component';
import { InputComponent } from './input/input.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TabComponent } from './tab/tab.component';
import { TabsContainerComponent } from './tabs-container/tabs-container.component';

@NgModule({
  declarations: [
    ModalComponent,
    AlertComponent,
    InputComponent,
    TabComponent,
    TabsContainerComponent,
  ],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [
    ModalComponent,
    AlertComponent,
    InputComponent,
    TabComponent,
    TabsContainerComponent,
  ],
})
export class SharedModule {}
