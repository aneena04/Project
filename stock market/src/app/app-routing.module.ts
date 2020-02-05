import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import {HomeComponent  } from "./home/home.component";
import {  LoginComponent} from "./login/login.component";
import { AddUserComponent } from './user/add-user/add-user.component';
import { AdminLandingPageComponent } from './admin-landing-page/admin-landing-page.component';
import { GetUserComponent } from './user/get-user/get-user.component';
import { pipe } from 'rxjs';
import { UpdateUserComponent } from './user/update-user/update-user.component';
import { AdminLoginComponent } from './login/admin-login/admin-login.component';
import { UpdateExcelComponent } from './update-excel/update-excel.component';
import { CompaniesComponent } from './companies/companies.component';
import { AddCompanyComponent } from './add-company/add-company.component';


const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'register',component:RegisterComponent},
  {path:'login',component:LoginComponent},
  {path:'add-user', component:AddUserComponent},
  {path:'admin-landing-page',component:AdminLandingPageComponent},
  {path:'get-user',component:GetUserComponent},
  {path:'update-user',component:UpdateUserComponent},
  {path:'admin-login',component:AdminLoginComponent},
  {path:'update-exel',component:UpdateExcelComponent},
  {path:'companies',component:CompaniesComponent},
  {path:'add-company',component:AddCompanyComponent}

  


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
