import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { HomeComponent } from './authenticated/home/home.component';
import { inject } from '@angular/core';
import { UserService } from './services/user.service';
import { AuthService } from './services/auth.service';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './authenticated/profile/profile.component';

const routes: Routes = [
  {
    path: '',
    component: WelcomeComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
    data: {
      authOnly: true,
    },
  },
  {
    path: 'u/:profile',
    component: ProfileComponent,
    data: {
      authOnly: true,
    },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
