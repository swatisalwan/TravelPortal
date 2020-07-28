import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginLogoutService {

  constructor(private router:Router) { }
   
  public isLogin():boolean{
      
    if (sessionStorage.getItem("email") === undefined || sessionStorage.getItem("email") === null) {
      return false;
    }
    else {
        return true;
      }
  }

public logout(){
window.alert("You are logged out")
sessionStorage.removeItem("email");
sessionStorage.removeItem("firstName")
this.router.navigate(["/login"])
}
}
