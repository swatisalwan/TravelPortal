import { Component, OnInit } from '@angular/core';
import { Ticket } from '../../models/ticket';
import { RestapiService } from '../../Services/restapi.service';
import { Router } from '@angular/router';
import { LoginLogoutService } from '../../Services/login-logout.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-detailed-ticket',
  templateUrl: './detailed-ticket.component.html',
  styleUrls: ['./detailed-ticket.component.css']
})
export class DetailedTicketComponent implements OnInit {
  ticket: Ticket;
  uploadImageData: FormData;
  retrieveResponse: any;
  comments: any;
  status: any;
  base64Data: any;
  retrievedImage: string;
  name: any;
  download: string;

  constructor(private http: HttpClient,private loginservice:LoginLogoutService,private service:RestapiService,private router:Router) { }

  ngOnInit(): void {
    if(!this.loginservice.isLogin()){
      window.alert("Please login first");
      this.router.navigate(["/login"]);
    }
  var data=localStorage.getItem('ticket');
  this.ticket=JSON.parse(data);
  
}

  editTicket(){
    if(this.ticket.status==="In Process" || this.ticket.status==="Done")
    {
      window.alert("Your Ticket Is Already In process. Can't Be Edited")
    }
    else{
      this.router.navigate(["/editTicket"])
    }
    

  }
  logOf()
  {
  this.loginservice.logout();
  }

  getImage() {
    //Make a call to Spring Boot to get the Image Bytes.
    console.log(this.ticket.ticketId)
    this.uploadImageData = new FormData();
    this.uploadImageData.append("id", this.ticket.ticketId);
  
   this.http.post('http://localhost:2222/getResponse', this.ticket.ticketId)
      .subscribe(
        res => {
          console.log(res);
          this.retrieveResponse = res["pdf"];
          this.comments=res["comments"]
          this.status=res["status"]
          this.name=res["fileName"]
          this.base64Data = this.retrieveResponse;
          this.retrievedImage = 'data:image/jpeg;base64,' + this.base64Data;
          // console.log(this.retrievedImage)
          // console.log(res["contentType"])
          if(res["contentType"]==="application/pdf"){
            this.download="document.pdf"
          }
          else{
            this.download="document.jpeg"
          }
          console.log(this.download);
        }
      );
  }

}
