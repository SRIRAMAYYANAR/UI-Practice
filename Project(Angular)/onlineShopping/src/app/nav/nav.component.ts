import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import {MatDialog} from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AddProductComponent } from '../add-product/add-product.component';
import { AddauthUserComponent } from '../addauth-user/addauth-user.component';
import { BuyerLoginComponent } from '../buyer-login/buyer-login.component';
import { HomeService } from '../home.service';
import { ProductService } from '../product.service';
import { RemoveProductComponent } from '../remove-product/remove-product.component';
import { RemoveauthUserComponent } from '../removeauth-user/removeauth-user.component';
import { UpdateProductComponent } from '../update-product/update-product.component';
import { UpdateauthUserComponent } from '../updateauth-user/updateauth-user.component';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  product:any=[];
  constructor(public dialog: MatDialog,public hmserv:HomeService,private proServ:ProductService,private router:Router) { }

  searchForm= new FormGroup({
    search: new FormControl('')
  })
  ngOnInit(): void {
    this.count();
  }
  addPro() {
    const dialogRef = this.dialog.open(AddProductComponent,{
            width: '50%'
    });      
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  
  updatePro() {
    const dialogRef = this.dialog.open(UpdateProductComponent,{
            width: '50%'
    });      
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  removePro(){
    const dialogRef = this.dialog.open(RemoveProductComponent,{
      width: '50%'
});      
dialogRef.afterClosed().subscribe(result => {
console.log(`Dialog result: ${result}`);
});
  }

  loginBuyer(){
    const dialogRef = this.dialog.open(BuyerLoginComponent,{
      width: '35%'
});      
dialogRef.afterClosed().subscribe(result => {
console.log(`Dialog result: ${result}`);
});
  }

  addAuth(){
    const dialogRef = this.dialog.open(AddauthUserComponent,{
      width: '50%'
});      
dialogRef.afterClosed().subscribe(result => {
console.log(`Dialog result: ${result}`);
});
  }

updateAuth(){
    const dialogRef = this.dialog.open(UpdateauthUserComponent,{
      width: '50%'
});      
  dialogRef.afterClosed().subscribe(result => {
  console.log(`Dialog result: ${result}`);
});
}

removeAuth(){
  const dialogRef = this.dialog.open(RemoveauthUserComponent,{
    width: '50%'
});      
dialogRef.afterClosed().subscribe(result => {
console.log(`Dialog result: ${result}`);
});
}

public search(){
  console.log(this.searchForm.value.search);
  return this.hmserv.search(this.searchForm.value.search).subscribe(result => {
    this.product=result;
    this.router.navigateByUrl("search");
  })
}
// welmsg:String = " ";
// emptyMessage:any;
name:any='';
  getsessname(){
    if(sessionStorage.getItem("uname")){
      this.name=sessionStorage.getItem("uname");
      // this.welmsg="Welcome "+this.name;
      return this.name;
    }else{
      return this.name;
    }
  }

  removelog(){
    sessionStorage.removeItem("uname");
    sessionStorage.removeItem("id");
    sessionStorage.removeItem("count");
  }

  public count(){
    return sessionStorage.getItem("count");
  }

  public viewCartProduct(){
    return this.proServ.viewCart().subscribe(result=>{
      console.log(result);
      this.router.navigateByUrl("cart");
    })
  }
}