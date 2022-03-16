import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {

  pro:Product;
  
  constructor(private proServ:ProductService) { 
    this.pro=new Product();
    
  }
  res:any;
  prd:any='';
  ngOnInit(): void {
  }
  
  public getPro(){
    
    return this.proServ.getProduct(this.pro.pid).subscribe(ans =>{
      this.prd=ans;
      console.log(this.prd);
    })
  }

  public updatePro(){
    return this.proServ.updateProduct(this.prd).subscribe(ans=> {
      console.log(ans);
      if(ans==1){
        this.res="Product Updated Successfully";
      }
      else{
        this.res="This Id Already Exist";
      }
    })
  } 
}
