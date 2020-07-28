import { Component, OnInit } from '@angular/core';
import { Ticket } from '../../models/ticket';
import { RestapiService } from '../../Services/restapi.service';
import { Router } from '@angular/router';
import {  AdminResponse } from '../../models/adminResponse';
import { LoginLogoutService } from '../../Services/login-logout.service';

@Component({
  selector: 'app-view-tickets',
  templateUrl: './view-tickets.component.html',
  styleUrls: ['./view-tickets.component.css']
})
export class ViewTicketsComponent implements OnInit {

  selectedFile
  ticket: Ticket;
  adminResponse=new AdminResponse()
  uploadImageData: FormData;
  constructor(private loginservice:LoginLogoutService,private service:RestapiService,private router:Router) { }

  ngOnInit(): void {
    var data=localStorage.getItem('ticket');
    this.ticket=JSON.parse(data);
  }

  public onFileChanged(event: any) {
    this.selectedFile = event.target.files[0];
    console.log(this.selectedFile)
  }

  onUpload() {
    console.log(this.selectedFile);
    
    this.adminResponse = new AdminResponse(this.ticket.ticketId, this.adminResponse.comment, this.adminResponse.status, this.selectedFile,this.selectedFile["name"] )
    this.uploadImageData = new FormData();
    this.uploadImageData.append('imageFile', this.selectedFile);
    this.uploadImageData.append("comment", this.adminResponse.comment);
    this.uploadImageData.append("status", this.adminResponse.status);
    this.uploadImageData.append("id", this.ticket.ticketId);
    let res = this.service.uploadImage(this.uploadImageData);
    window.alert("Cooments Added Successfully!!")
    res.subscribe(data => {
      console.log(data);
    })
  }
  logOf()
{
this.loginservice.logout();
}

}
