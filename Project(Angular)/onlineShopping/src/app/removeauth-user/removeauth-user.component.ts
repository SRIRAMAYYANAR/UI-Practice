import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { User } from '../authuser';

@Component({
  selector: 'app-removeauth-user',
  templateUrl: './removeauth-user.component.html',
  styleUrls: ['./removeauth-user.component.css']
})
export class RemoveauthUserComponent implements OnInit {

  usr:User;
  authusr:any='';
  res:any;
  constructor(private serv:AuthService) {
    this.usr=new User();
   }

  ngOnInit(): void {
  }

  removeAuth(){
    return this.serv.deleteAuth(this.usr).subscribe(ans=> {
      console.log(ans);
      if(ans==1){
        this.res="Product Removed Successfully";
      }
      else{
        this.res="This Id Already Exist";
      }
    })
  }

  public getAuth(){
    return this.serv.getAuth(this.usr.uid).subscribe(ans =>{
      this.authusr=ans;
      console.log(this.authusr);
    }) 
  }

  searchAuth(){
    if(this.usr.uid != 0){
      this.getAuth();
    }
    else{
      this.res="Check your Product ID";
    }
  }

  cancel(){
    this.authusr='';
  }

}
