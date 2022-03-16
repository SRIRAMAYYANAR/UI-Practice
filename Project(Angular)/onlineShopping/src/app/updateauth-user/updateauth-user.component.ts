import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { User } from '../authuser';

@Component({
  selector: 'app-updateauth-user',
  templateUrl: './updateauth-user.component.html',
  styleUrls: ['./updateauth-user.component.css']
})
export class UpdateauthUserComponent implements OnInit {

  usr:User;
  ausr:any='';
  constructor(private serv:AuthService) { 
    this.usr = new User();
  }

  ngOnInit(): void {
  }

  public getAuth(){
    console.log(this.usr.uid);
    return this.serv.getAuth(this.usr.uid).subscribe(ans =>{
      this.ausr=ans;
      console.log(this.ausr);
      console.log(this.ausr.uname);
  });
}

public updateAuth(){
  return this.serv.updateAuth(this.ausr).subscribe(ans => {
    this.ausr=ans;
      console.log(this.ausr);
  });
}
}
