import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import {HomeComponent  } from "./home/home.component";
import {  LoginComponent} from "./login/login.component";
import { AddUserComponent } from './user/add-user/add-user.component';
import { AdminLandingPageComponent } from './admin-landing-page/admin-landing-page.component';
import { GetUserComponent } from './user/get-user/get-user.component';


const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'register',component:RegisterComponent},
  {path:'login',component:LoginComponent},
  {path:'add-user', component:AddUserComponent},
  {path:'admin-landing-page',component:AdminLandingPageComponent},
  {path:'get-user',component:GetUserComponent}

  


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
