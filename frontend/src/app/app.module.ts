import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './authenticated/home/home.component';
import { RegisterComponent } from './register/register.component';
import { ReversePipe } from './pipes/reverse.pipe';
import { ProfileComponent } from './authenticated/profile/profile.component';
import { SharedModule } from './shared/shared.module';
import { ModalsModule } from './modals/modals.module';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    NavbarComponent,
    LoginComponent,
    HomeComponent,
    RegisterComponent,
    ReversePipe,
    ProfileComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    SharedModule,
    ModalsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
