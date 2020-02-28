import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { UpdateExcelComponent } from './update-excel/update-excel.component';
import { AddUserComponent } from './user/add-user/add-user.component';
import { HttpClientModule } from '@angular/common/http';
import { AdminLandingPageComponent } from './admin-landing-page/admin-landing-page.component';
import { GetUserComponent } from './user/get-user/get-user.component';
import { UpdateUserComponent } from './user/update-user/update-user.component';
import { AdminLoginComponent } from './login/admin-login/admin-login.component';
import { CompaniesComponent } from './companies/companies.component';
import { AddCompanyComponent } from './add-company/add-company.component';
import { CompanyService } from './company.service';
import { UpdateCompanyComponent } from './update-company/update-company.component';
import { GetExchangeComponent } from './exchange/get-exchange/get-exchange.component';
import { UpdateExchangeComponent } from './exchange/update-exchange/update-exchange.component';
import { AddIpoComponent } from './ipo/add-ipo/add-ipo.component';
import { GetIpoComponent } from './ipo/get-ipo/get-ipo.component';
import { UpdateIpoComponent } from './ipo/update-ipo/update-ipo.component';
import { UserLandingPageComponent } from './user-landing-page/user-landing-page.component';
import { CompareSectorComponent } from './compare-sector/compare-sector.component';
import { CompareCompanyComponent } from './compare-company/compare-company.component';
import { AddExchangeComponent } from './exchange/add-exchange/add-exchange.component';
import { AddStockPriceComponent } from './stock-price/add-stock-price/add-stock-price.component';
import { UpdateStockPriceComponent } from './stock-price/update-stock-price/update-stock-price.component';
import { ListStockPriceComponent } from './stock-price/list-stock-price/list-stock-price.component';
import { ActivateUserComponent } from './activate-user/activate-user.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    HomeComponent,
    LoginComponent,
    UpdateExcelComponent,
    AddUserComponent,
    AdminLandingPageComponent,
    GetUserComponent,
    UpdateUserComponent,
    AdminLoginComponent,
    CompaniesComponent,
    AddCompanyComponent,
    UpdateCompanyComponent,
    GetExchangeComponent,
    UpdateExchangeComponent,
    AddIpoComponent,
    GetIpoComponent,
    UpdateIpoComponent,
    AddExchangeComponent,
    UserLandingPageComponent,
    CompareSectorComponent,
    CompareCompanyComponent,
    UpdateExchangeComponent,
    AddStockPriceComponent,
    UpdateStockPriceComponent,
    ListStockPriceComponent,
    ActivateUserComponent,
    AboutUsComponent,
    ContactUsComponent
    
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    CompanyService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
