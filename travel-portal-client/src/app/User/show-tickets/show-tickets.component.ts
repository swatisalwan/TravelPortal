import { Component, OnInit } from '@angular/core';
import { RestapiService } from '../../Services/restapi.service';
import { Router } from '@angular/router';
import { Ticket } from '../../models/ticket';
import { LoginLogoutService } from '../../Services/login-logout.service';

@Component({
  selector: 'app-show-tickets',
  templateUrl: './show-tickets.component.html',
  styleUrls: ['./show-tickets.component.css']
})
export class ShowTicketsComponent implements OnInit {
  ticketList:Ticket[]= [];
  page:number=0;
  pages:Array<number>;

  constructor(private loginservice:LoginLogoutService,private service:RestapiService,private router:Router) { }

  setPage(i,event:any){
    event.preventDefault();
    this.page=i;
    this.getTicketList();
  }

  ngOnInit() {
    if(!this.loginservice.isLogin()){
      window.alert("Please login first");
      this.router.navigate(["/login"]);
    }
    
    this.getTicketList();
    
  }
  

getTicketList(){
  let resp=this.service.getTicketList(sessionStorage.email,this.page);
    resp.subscribe(Items => {
      this.ticketList=Items['content'];
      this.pages=new Array(Items['totalPages'])

})
}
viewDetails(ticket)
{
  localStorage.setItem('ticket', JSON.stringify(ticket));
  console.log(localStorage.getItem('ticket'));
  window.open("/detailedTicket")
}
logOf()
{
this.loginservice.logout();
}


}