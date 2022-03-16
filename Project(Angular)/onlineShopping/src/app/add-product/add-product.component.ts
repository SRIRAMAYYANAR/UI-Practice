import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';


@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  pro:Product;
  constructor(private proServ: ProductService) { 
    this.pro=new Product();
  }
  res:any;
  ngOnInit(): void {

  }

  public addPro(){
    return this.proServ.addProduct(this.pro).subscribe(ans=>{
      if(ans==1){
        this.res="Product Added Successfully";
      }
      else{
        this.res="This Id Already Exist";
      }
    })
  }
}
