import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { RestapiService } from '../../Services/restapi.service';

@Component({
  selector: 'app-check-credentials',
  templateUrl: './check-credentials.component.html',
  styleUrls: ['./check-credentials.component.css']
})


export class CheckCredentialsComponent implements OnInit {

  constructor(private service:RestapiService, private router:Router, http:HttpClient) { }
  ngOnInit(): void {
   
    document.getElementById("mail").innerHTML=localStorage.getItem('email');
    document.getElementById("fname").innerHTML=localStorage.getItem('firstName');
    document.getElementById("lname").innerHTML=localStorage.getItem('lastName');
    document.getElementById("bunit").innerHTML=localStorage.getItem('businessUnit');
    document.getElementById("title").innerHTML=localStorage.getItem('title');
    document.getElementById("tel").innerHTML=localStorage.getItem('telephone');
    document.getElementById("a1").innerHTML=localStorage.getItem('address1');
    document.getElementById("a2").innerHTML=localStorage.getItem('address2');
    document.getElementById("city").innerHTML=localStorage.getItem('city');
    document.getElementById("state").innerHTML=localStorage.getItem('state');
    document.getElementById("zip").innerHTML=localStorage.getItem('zip');
    document.getElementById("country").innerHTML=localStorage.getItem('country');

  }
  
routeBack(){
  this.router.navigate(['/register'])
}

}


