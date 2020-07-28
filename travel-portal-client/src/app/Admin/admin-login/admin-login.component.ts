import { Component, OnInit } from '@angular/core';
import { RestapiService } from '../../Services/restapi.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  username:string;
  password:string;
  message:any

  constructor(private service:RestapiService,private router:Router) { }

  ngOnInit(): void {
  }
  adminLogin(){
    
    let resp=this.service.login(this.username,this.password)
    resp.subscribe(data=>{
     
    this.message=data
    if(data["email"]==="undefined"){
      console.log("Wrong Credentials");

    }
    else if( data["role"]=="admin"){
     
      this.router.navigate(["/adminDashboard"])
    }
    else{
      window.alert("Login As An User!!!")

    }
  }
    )}
}