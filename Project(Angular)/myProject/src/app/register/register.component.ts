import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginVal } from '../login';
import { RegisterService } from '../register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  logData: LoginVal
  constructor(private regs:RegisterService) { 
    this.logData = new LoginVal();
  }

  ngOnInit(): void {
  }
  public reg(){
  // console.log(myForm.value);
  // // console.log(myForm.value|json);
  // console.log(myForm.value);
  // console.log(myForm.valid);
  // console.log(this.logData.uname);
  // this.regs.regServ(this.logData).subscribe(ans=>console.log(ans));
  
  }

}
