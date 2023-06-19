import { AuthenticatedRoutingModule } from './authenticated-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { AboutComponent } from './profile/about/about.component';
import { ModalsModule } from '../modals/modals.module';

@NgModule({
  declarations: [HomeComponent, ProfileComponent, AboutComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AuthenticatedRoutingModule,
    SharedModule,
    ModalsModule,
  ],
})
export class AuthenticatedModule {}
