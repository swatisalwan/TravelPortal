import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Ticket } from '../models/ticket';

@Injectable({
  providedIn: 'root'
})
export class RestapiService {

constructor(private http:HttpClient ) { }

public login(username:string, password:string){
  const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
  return this.http.get("http://localhost:2222/",{headers,responseType: 'json'}).pipe(
    map(
        userData => {
         return userData;
        })
      );

  }

  public doRegister(user)
  {
    
      return this.http.post("http://localhost:2222/register", user,{responseType:'text' as 'json'}).pipe(
        map(
          userData => {
           sessionStorage.setItem('username',user.firstName);
           return userData;
          })
        );

  }

  public forgetPassword(email)
  {
    
      return this.http.post("http://localhost:2222/forgetPassword", email,{responseType:'text' as 'json'}).pipe(
        map(
          ticketData => {
           return ticketData;
          })
        );
    

  }


  public submitTicket(newTicket)
  {
    let tokenStr = 'Bearer ' + localStorage.getItem("token");
    console.log(localStorage.getItem("token"));
    const headers = new HttpHeaders().set('Authorization', tokenStr);
      return this.http.post("http://localhost:2222/submitTicket", newTicket,{headers,responseType:'text' as 'json'}).pipe(
        map(
          userData => {
          
           return userData;
          })
        );
  }

  public getAllTickets() {
    return this.http.get("http://localhost:2222/getList",{responseType:'json'}).pipe(
      map(
        userData => {
        
         return userData;
        })
      );
  }

  public getTicketList(user,page:number) {
          return this.http.get("http://localhost:2222/get/"+user+'?page='+page,{responseType:'json'}).pipe(
            map(
              userData => {
              
               return userData;
              })
            );
}

  
uploadImage(imageData) {
  console.log(imageData)
  const headers = { 'Authorization': 'Bearer my-token', 'My-Custom-Header': 'foobar' }
  return this.http.post("http://localhost:2222/uploadImage", imageData, { headers, observe: 'response' }).pipe(
    map(
      userData => {
        return userData;
      })
  );
}
editTicketDetails(ticket){
  
  const headers = { 'Authorization': 'Bearer my-token', 'My-Custom-Header': 'foobar' }
    return this.http.patch("http://localhost:2222/updateTicket", ticket,{headers,responseType:'text' as 'json'}).pipe(
      map(
        userData => {
        
         return userData;
        })
      );
}
 
 
}
