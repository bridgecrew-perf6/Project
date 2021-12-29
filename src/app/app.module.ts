import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { FundmeComponent } from './fundme/fundme.component';
import { HomeComponent } from './home/home.component';
import { FundraisersComponent } from './fundraisers/fundraisers.component';
import { ProfileComponent } from './profile/profile.component';
import { DonatenowComponent } from './donatenow/donatenow.component';
import { JazzcashComponent } from './jazzcash/jazzcash.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    FundmeComponent,
    HomeComponent,
    FundraisersComponent,
    ProfileComponent,
    DonatenowComponent,
    JazzcashComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
