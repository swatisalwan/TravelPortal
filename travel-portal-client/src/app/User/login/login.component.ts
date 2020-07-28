import { Component, OnInit } from '@angular/core';
import { RestapiService } from '../../Services/restapi.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username:string;
  password:string;
  message:any
  constructor(private service:RestapiService,private router:Router) { }

  ngOnInit(): void {
  
  }
  
  
  doLogin()
  {
    let resp=this.service.login(this.username,this.password)
    resp.subscribe(data=>{
      this.message=data
      if(data["email"]==="undefined"||data["email"]==="null" ){
      window.alert("Wrong Credentials");
      }
      else if( data["role"]=="user"){
      this.router.navigate(["/homePage"])
      sessionStorage.setItem('firstName',data["firstName"])
      sessionStorage.setItem('email',data["email"])
      }
    else{
      window.alert("Login As An Admin!!!")

    }
    
     
    })

   
  }
  

}