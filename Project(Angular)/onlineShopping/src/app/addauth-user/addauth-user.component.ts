import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { User } from '../authuser';

@Component({
  selector: 'app-addauth-user',
  templateUrl: './addauth-user.component.html',
  styleUrls: ['./addauth-user.component.css']
})
export class AddauthUserComponent implements OnInit {

  usr:User;
  constructor(private serv:AuthService) { 
    this.usr = new User();
  }
ans:any;
  ngOnInit(): void {
  }
res:any;
  public addauth(){
    return this.serv.addUser(this.usr).subscribe(ans=>{
      if(ans==1){
        this.res="Auth User Added Successfully";
      }
      else{
        this.res="Check your input fields";
      }
    })
  }
}

