import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { HomeService } from '../home.service';
import { Register } from '../register';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  reg:Register;
  res:any;
  constructor(private serv:HomeService) {
    this.reg=new Register();
   }

  ngOnInit(): void {

  }

  hide=true;
  fname =new FormControl('', [Validators.required, Validators.nullValidator]);
  fnameError = "you must fill this";
  email = new FormControl('', [Validators.required, Validators.email]);
  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }
    else{
      return this.email.hasError('email') ? 'Not a valid email' : '';
    }
  }
 

  public register(){
    console.log(this.reg);
    return this.serv.register(this.reg).subscribe(ans=>{
      if(ans==1){
        this.res="Successfully Registered";
      }
      else{
        this.res="This Id Already Exist";
      }
    });
  }
}