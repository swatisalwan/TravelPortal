import { Component, OnInit } from '@angular/core';
import { RestapiService } from '../../Services/restapi.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent implements OnInit {

  email:string;
  message:any

  constructor(private service:RestapiService,private router:Router) { }

  ForgetSubmit()
  {
    let resp=this.service.forgetPassword(this.email)
    resp.subscribe(data=>{
    this.message=data
     
    })

  }

  ngOnInit(): void {
  }

}
