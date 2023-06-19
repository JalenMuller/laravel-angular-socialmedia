import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './modal/modal.component';
import { AlertComponent } from './alert/alert.component';
import { InputComponent } from './input/input.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TabComponent } from './tab/tab.component';
import { TabsContainerComponent } from './tabs-container/tabs-container.component';
import { VerticalTabsContainerComponent } from './vertical-tabs-container/vertical-tabs-container.component';
import { VerticalTabComponent } from './vertical-tab/vertical-tab.component';
import { AddInputComponent } from './add-input/add-input.component';
import { GenderPipe } from './pipes/gender.pipe';
import { ReversePipe } from './pipes/reverse.pipe';

@NgModule({
  declarations: [
    ModalComponent,
    AlertComponent,
    InputComponent,
    TabComponent,
    TabsContainerComponent,
    VerticalTabsContainerComponent,
    VerticalTabComponent,
    AddInputComponent,
    GenderPipe,
    ReversePipe,
  ],
  imports: [CommonModule, ReactiveFormsModule],

  exports: [
    ModalComponent,
    AlertComponent,
    InputComponent,
    TabComponent,
    TabsContainerComponent,
    VerticalTabsContainerComponent,
    VerticalTabComponent,
    AddInputComponent,
    GenderPipe,
    ReversePipe,
  ],
})
export class SharedModule {}
