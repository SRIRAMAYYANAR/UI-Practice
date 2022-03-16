import { Component, OnInit } from '@angular/core';
import { Product } from 'src/product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-remove-product',
  templateUrl: './remove-product.component.html',
  styleUrls: ['./remove-product.component.css']
})
export class RemoveProductComponent implements OnInit {

  pro:Product;
  constructor(private proServ: ProductService) { 
    this.pro=new Product();
  }
  ngOnInit(): void {
  }
  res='';
  prd:any='';
  myres:any;
  public removePro(){
    return this.proServ.deleteProduct(this.pro).subscribe(ans=> {
      console.log(ans);
      if(ans==1){
        this.res="Product Removed Successfully";
      }
      else{
        this.res="This Id Already Exist";
      }
    })
  }

  public getPro(){
    return this.proServ.getProduct(this.pro.pid).subscribe(ans =>{
      this.prd=ans;
      console.log(this.prd);
    }) 
  }

  public cancel(){
    this.prd='';
  }

  public searchPro(){
    if(this.pro.pid != 0){
      this.getPro();
    }
    else{
      this.res="Check your Product ID";
    }
  }
}
