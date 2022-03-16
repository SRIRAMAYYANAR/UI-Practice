import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { HomeService } from '../home.service';
import { Register } from '../register';
import { RegisterComponent } from '../register/register.component';

@Component({
  selector: 'app-buyer-login',
  templateUrl: './buyer-login.component.html',
  styleUrls: ['./buyer-login.component.css']
})
export class BuyerLoginComponent implements OnInit {
  hide=true;
  reg:Register;
  constructor(public dialog: MatDialog,private service:HomeService) {
    this.reg=new Register();
   }

  ngOnInit(): void {
  }
 result:any;
  registerBuyer(){
    const dialogRef = this.dialog.open(RegisterComponent,{
      width: '50%'
});      
dialogRef.afterClosed().subscribe(result => {
console.log(`Dialog result: ${result}`);
});
  }
 
  public login(){
    console.log("dfudu");
    return this.service.login(this.reg).subscribe(d=>
      {
        this.result = d;
        console.log(this.result);
        sessionStorage.setItem("uname",this.result.fname);
        sessionStorage.setItem("id",this.result.rid);
      }
    )}

   


}
