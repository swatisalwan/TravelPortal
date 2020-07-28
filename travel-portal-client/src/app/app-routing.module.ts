import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './User/login/login.component';
import {RegisterComponent} from './User/register/register.component';
import { CheckCredentialsComponent } from './User/check-credentials/check-credentials.component';
import { ForgetPasswordComponent } from './User/forget-password/forget-password.component';
import { HomePageComponent } from './User/home-page/home-page.component';
import { SubmitTicketComponent } from './User/submit-ticket/submit-ticket.component';
import { AdminLoginComponent } from './Admin/admin-login/admin-login.component';
import { ViewTicketsComponent } from './Admin/view-tickets/view-tickets.component';
import { AdminDashboardComponent } from './Admin/admin-dashboard/admin-dashboard.component';
import { ShowTicketsComponent } from './User/show-tickets/show-tickets.component';
import { DetailedTicketComponent } from './User/detailed-ticket/detailed-ticket.component';
import { EditTicketComponent } from './User/edit-ticket/edit-ticket.component';
import { Covid19Component } from './covid19/covid19.component';

const routes: Routes = [
  {path:"",redirectTo:"login",pathMatch:"full"},
  {path:"login",component:LoginComponent},
  {path:"register",component:RegisterComponent},
  {path:"checkCredentials",component:CheckCredentialsComponent},
  {path:"forgetPassword",component:ForgetPasswordComponent},
  {path:"homePage",component:HomePageComponent},
  {path:"submitTicket",component:SubmitTicketComponent},
  {path:"adminLogin",component:AdminLoginComponent},
  {path:"viewTickets",component:ViewTicketsComponent},
  {path:"adminDashboard",component:AdminDashboardComponent},
  {path:"showTickets",component:ShowTicketsComponent},
  {path:"detailedTicket",component:DetailedTicketComponent},
  {path:"editTicket",component:EditTicketComponent},
  {path:"covid19",component:Covid19Component}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
