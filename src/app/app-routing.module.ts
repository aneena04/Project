import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import {HomeComponent  } from "./home/home.component";
import {  LoginComponent} from "./login/login.component";
import { AddUserComponent } from './user/add-user/add-user.component';
import { AdminLandingPageComponent } from './admin-landing-page/admin-landing-page.component';
import { GetUserComponent } from './user/get-user/get-user.component';
import { UpdateUserComponent } from './user/update-user/update-user.component';
import { UpdateExcelComponent } from './update-excel/update-excel.component';
import { CompaniesComponent } from './companies/companies.component';
import { AddCompanyComponent } from './add-company/add-company.component';
import { AddExchangeComponent } from './exchange/add-exchange/add-exchange.component';
import { GetExchangeComponent } from './exchange/get-exchange/get-exchange.component';
import { AddIpoComponent } from './ipo/add-ipo/add-ipo.component';
import { GetIpoComponent } from './ipo/get-ipo/get-ipo.component';
import { UserLandingPageComponent } from './user-landing-page/user-landing-page.component';
import { UpdateCompanyComponent } from './update-company/update-company.component';
import { UpdateIpoComponent } from './ipo/update-ipo/update-ipo.component';
import { UpdateExchangeComponent } from './exchange/update-exchange/update-exchange.component';
import { AddStockPriceComponent } from './stock-price/add-stock-price/add-stock-price.component';
import { ListStockPriceComponent } from './stock-price/list-stock-price/list-stock-price.component';
import { UpdateStockPriceComponent } from './stock-price/update-stock-price/update-stock-price.component';
import { ActivateUserComponent } from './activate-user/activate-user.component';
import { CompareSectorComponent } from './compare-sector/compare-sector.component';
import { CompareCompanyComponent } from './compare-company/compare-company.component';
import { ChartsComponent } from './charts/charts.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { LogoutComponent } from './logout/logout.component';
import { UpdateProfileComponent } from './update-profile/update-profile.component';
import { ChangeUserPasswordComponent } from './change-user-password/change-user-password.component';
import { UserViewIpoComponent } from './user-view-ipo/user-view-ipo.component';


const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'register',component:RegisterComponent},
  {path:'login',component:LoginComponent},
  {path:'add-user', component:AddUserComponent},
  {path:'admin-landing-page',component:AdminLandingPageComponent},
  {path:'get-user',component:GetUserComponent},
  {path:'update-user',component:UpdateUserComponent},
  {path:'import-exel',component:UpdateExcelComponent},
  {path:'get-company',component:CompaniesComponent},
  {path:'add-company',component:AddCompanyComponent},
   {path:'add-exchange',component:AddExchangeComponent},
   {path:'get-exchange',component:GetExchangeComponent},
   {path:'add-ipo',component:AddIpoComponent},
   {path:'get-ipo',component:GetIpoComponent},
   {path:'update-ipo',component:UpdateIpoComponent},
   {path:'user-landing-page',component:UserLandingPageComponent},
   {path:'update-company',component:UpdateCompanyComponent},
   {path:'update-exchange',component:UpdateExchangeComponent},
   {path:'add-stock-price',component:AddStockPriceComponent},
   {path:'get-stock-price',component:ListStockPriceComponent},
   {path:'update-stock-price',component:UpdateStockPriceComponent},
   {path:'activate-user',component:ActivateUserComponent},
   {path:'compare-sector',component:CompareSectorComponent},
   {path:'compare-company',component:CompareCompanyComponent},
   {path:'charts',component:ChartsComponent},
   {path:'view-user-profile',component:UserProfileComponent},
   {path:'contact-us',component:ContactUsComponent},
   {path:'about-us',component:AboutUsComponent},
   {path:'logout',component:LogoutComponent},
{path:'update-profile',component:UpdateProfileComponent},
{path:'change-password',component:ChangeUserPasswordComponent},
{path:'get-user-ipo',component:UserViewIpoComponent},










  


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
