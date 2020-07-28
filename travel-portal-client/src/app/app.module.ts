import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './User/login/login.component';
import { RestapiService } from './Services/restapi.service';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { RegisterComponent } from './User/register/register.component';
import { CheckCredentialsComponent } from './User/check-credentials/check-credentials.component';
import { ForgetPasswordComponent } from './User/forget-password/forget-password.component';
import { HomePageComponent } from './User/home-page/home-page.component';
import { SubmitTicketComponent } from './User/submit-ticket/submit-ticket.component';
import { CommonModule, DatePipe } from '@angular/common';
import { AdminLoginComponent } from './Admin/admin-login/admin-login.component';
import { AdminDashboardComponent } from './Admin/admin-dashboard/admin-dashboard.component';
import { ShowTicketsComponent } from './User/show-tickets/show-tickets.component';
import { DetailedTicketComponent } from './User/detailed-ticket/detailed-ticket.component';
import { EditTicketComponent } from './User/edit-ticket/edit-ticket.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ViewTicketsComponent } from './Admin/view-tickets/view-tickets.component';
import { Covid19Component } from './covid19/covid19.component';
 import { ChartsModule } from 'ng2-charts'
import { MatButtonModule } from '@angular/material/button';
import { MatPaginatorModule } from '@angular/material/paginator';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    CheckCredentialsComponent,
    ForgetPasswordComponent,
    HomePageComponent,
    SubmitTicketComponent,
    AdminLoginComponent,
    ViewTicketsComponent,
    AdminDashboardComponent,
    ShowTicketsComponent,
    DetailedTicketComponent,
    EditTicketComponent,
    Covid19Component,
    
    
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatTableModule,
   MatSortModule,
   MatFormFieldModule,
   MatInputModule,
   ChartsModule, 
   MatButtonModule,
   MatPaginatorModule,
  ],
  providers: [RestapiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
