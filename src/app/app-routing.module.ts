import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DonatenowComponent } from './donatenow/donatenow.component';
import { FundmeComponent } from './fundme/fundme.component';
import { FundraisersComponent } from './fundraisers/fundraisers.component';
import { HomeComponent } from './home/home.component';
import { JazzcashComponent } from './jazzcash/jazzcash.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { ReqdetailsComponent } from './reqdetails/reqdetails.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'fundme', component: FundmeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'fundraisers', component: FundraisersComponent},
  {path: 'login', component: LoginComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'donatenow', component: DonatenowComponent},
  {path: 'jazzcash', component: JazzcashComponent},
  {path: 'fundraisers/details', component: ReqdetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
