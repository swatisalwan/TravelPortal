import { Component, OnInit } from '@angular/core';
import { RestapiService } from '../../Services/restapi.service';
import { Router } from '@angular/router';
import { Ticket } from '../../models/ticket';
import { LoginLogoutService } from '../../Services/login-logout.service';

@Component({
  selector: 'app-edit-ticket',
  templateUrl: './edit-ticket.component.html',
  styleUrls: ['./edit-ticket.component.css']
})
export class EditTicketComponent implements OnInit {

 
  ticketForm: Ticket;     
  ticket:Ticket;          // Data Coming from database
  constructor(private loginservice:LoginLogoutService,private service:RestapiService, private router:Router) { }

  ngOnInit(): void {

    var data=localStorage.getItem('ticket');
    this.ticket=JSON.parse(data);
    this.ticketForm=this.ticket;
  }
  EdittedTicket(){
    
    this.ticketForm.status="Resubmitted";
    let resp = this.service.editTicketDetails(this.ticketForm);
    resp.subscribe((data)=>{
    window.alert("You ticket got updated! ");
   
  })
}

  routeBack(){
    this.router.navigate(["/homePage"])

  }

  logOf()
  {
  this.loginservice.logout();
  }


}
