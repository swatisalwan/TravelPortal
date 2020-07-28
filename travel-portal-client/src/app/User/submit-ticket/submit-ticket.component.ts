import { Component, OnInit } from '@angular/core';
import { FormGroup,Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { RestapiService } from '../../Services/restapi.service';
import { Ticket } from '../../models/ticket';
import { DatePipe } from '@angular/common';
import { LoginLogoutService } from '../../Services/login-logout.service';





@Component({
  selector: 'app-submit-ticket',
  templateUrl: './submit-ticket.component.html',
  styleUrls: ['./submit-ticket.component.css']
})
export class SubmitTicketComponent implements OnInit {

  newTicket= new Ticket();
  ticketForm: FormGroup;
  submitted = false;
  result:string
  unique:string
  pipe;
  now;

  constructor(private loginservice:LoginLogoutService,private service:RestapiService,private router:Router, private formBuilder: FormBuilder) {}


  ngOnInit() {

    if(!this.loginservice.isLogin()){
      window.alert("Please login first");
      this.router.navigate(["/login"]);
    }

    this.ticketForm = this.formBuilder.group({

    requestType: ['', [Validators.required]],
    priority: ['', [Validators.required]],
    toTravelCity: ['', [Validators.required]],
    fromTravelCity: ['', [Validators.required]],
    passportNumber: ['', [Validators.required, Validators.maxLength(25)]],
    projectName: ['', [Validators.required, Validators.maxLength(100)]],
    approvedBy: ['', [Validators.maxLength(100)]],
    duration: ['', [ Validators.maxLength(100)]],
    upperBound: ['', [Validators.maxLength(500)]],
    upperBoundAllowed: ['',],
    expenseBy: ['',],
    additionalDetails: ['', [Validators.required, Validators.maxLength(1000)]],
    endDate: ['', [Validators.required]],
    startDate: ['', [Validators.required]]
   });


}

generateId() :any{
  this.result='';
  var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var charactersLength = characters.length;
  for ( var i = 0; i < 4; i++ ) {
     this.result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return this.result;
}

get f() { return this.ticketForm.controls; }

onFormSubmit()  {

  this.submitted = true;
  if (this.ticketForm.invalid) {
     return;
  }
  this.pipe = new DatePipe('en-US');
  this.now = Date.now();
  this.unique = sessionStorage.getItem("firstName").slice(0, 3);


  this.newTicket=this.ticketForm.value;
  this.newTicket.submittedDate=this.pipe.transform(this.now, 'yyyy-MM-dd');
  this.newTicket.ticketId=this.unique+"#"+this.generateId(); 
  this.newTicket.status="Submitted";
  this.newTicket.firstName=sessionStorage.getItem('firstName');
  this.newTicket.emailId=sessionStorage.getItem('email');

  console.log(this.newTicket.submittedDate);
  let resp= this.service.submitTicket(this.newTicket);

  resp.subscribe(data=>{
    console.log(data)
    
  }) 
  localStorage.setItem('ticket', JSON.stringify(this.newTicket));
  
  this.router.navigate(["/editTicket"])
  

}



}
