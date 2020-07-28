import { Component, OnInit } from '@angular/core';
import { RestapiService } from '../../Services/restapi.service';
import { Router } from '@angular/router';
import { LoginLogoutService } from '../../Services/login-logout.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor(private service:RestapiService,private router:Router,private loginservice:LoginLogoutService) { }
  
  ngOnInit(): void {
    if(!this.loginservice.isLogin()){
      window.alert("Please login first");
      this.router.navigate(["/login"]);
    }
  }
  
  submitTicket(){
    this.router.navigate(["/submitTicket"])
  }

  showTickets()
  {
    this.router.navigate(["/showTickets"])
  }
  
  covidUpdates()
  {
    this.router.navigate(["/covid19"])
  }
  logOf()
  {
  this.loginservice.logout();
  }

}
