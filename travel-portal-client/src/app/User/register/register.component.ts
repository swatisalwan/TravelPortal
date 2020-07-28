import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RestapiService } from '../../Services/restapi.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
   submitted = false;
   user:User
  makepassword() {
              var result           = '';
              var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
              var charactersLength = characters.length;
              for ( var i = 0; i < 8; i++ ) {
                 result += characters.charAt(Math.floor(Math.random() * charactersLength));
              }
              return result;
            }

  constructor(private service:RestapiService,private router:Router, private formBuilder: FormBuilder) { }
  
  
  ngOnInit() {
    this.registerForm = this.formBuilder.group({

      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      businessUnit: ['', [Validators.required]],
      title: ['', [Validators.required]],
      email: ['', [Validators.required,Validators.pattern("^[a-z0-9._%+-]+@nagarro+.com")]],
      telephone: ['', [Validators.required,Validators.maxLength(15)]],
      address1: ['', [Validators.required]],
      address2: [''],
      city: ['', [Validators.required]],
      state: ['', [Validators.required]],
      zip: ['', [Validators.required]],
      country: ['', [Validators.required]]
    });
  }
  get f() { return this.registerForm.controls; }

  submitData()
  {

    this.submitted = true;
  if (this.registerForm.invalid) {
    
     return;
  }
  this.user=this.registerForm.value;
  this.user.password=this.makepassword();
  this.user.role='user';
  let resp= this.service.doRegister(this.user);

  resp.subscribe(data=>{
    console.log(data)
    
  }) 
 
    localStorage.setItem('email', this.registerForm.value.email);
    localStorage.setItem('firstName',this.registerForm.value.firstName);
    localStorage.setItem('lastName', this.registerForm.value.lastName);
    localStorage.setItem('businessUnit', this.registerForm.value.businessUnit);
    localStorage.setItem('title', this.registerForm.value.title);
    localStorage.setItem('telephone',this.registerForm.value.telephone);
    localStorage.setItem('address1', this.registerForm.value.address1);
    localStorage.setItem('address2', this.registerForm.value.address2);
    localStorage.setItem('city', this.registerForm.value.city);
    localStorage.setItem('state',this.registerForm.value.state);
    localStorage.setItem('zip', this.registerForm.value.zip);
    localStorage.setItem('country',this.registerForm.value.country);
    this.router.navigate(["/checkCredentials"])
  }

}
