import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LogServiceService } from '../log-service.service';
import{ LoginVal} from '../login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  logData:LoginVal;
  constructor(private logs:LogServiceService) {
  this.logData=new LoginVal();
  }

  ngOnInit(): void {
  }
  public logans(myreg:NgForm){
   
 
    //  console.log(this.logData);
    console.log(myreg);
    console.log(myreg.submitted);
    console.log(myreg.form.value);
    // console.log(myreg.value.uname);
    // console.log(myreg.submitted);
    // this.logs.logServ(this.logData).subscribe(ans=>console.log(ans))
  }

}
