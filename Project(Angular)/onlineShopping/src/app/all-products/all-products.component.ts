import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../product';
import { ProductService } from '../product.service';


@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})
export class AllProductsComponent implements OnInit {
  
  product:any=[];

  pro:any='';
  url :any;
  viewPro:Product;
  constructor(public proService: ProductService,private router:Router) {
    this.url =window.document.URL;
    this.viewPro=new Product();
   }
   
   
  ngOnInit(): void {
    
    this.proget();
  }

  public proget(){
    // console.log(this.url);
    
    if(this.url== "http://localhost:4200/allProducts" || this.url== "http://localhost:4200/" || this.url== "http://localhost:4200/home"){
      this.proService.allproduct().subscribe(d=> {
        this.product=d;
        // console.log(this.product[0]);
        // console.log(window.document.URL);
        // sessionStorage.setItem("count",);
        this.ratings();
      });
    }
    else if(this.url== "http://localhost:4200/popProducts"){
      this.proService.popProduct().subscribe(d=> {
        this.product=d;
        console.log(window.document.URL);
      });
    }
    else if(this.url== "http://localhost:4200/newArrival"){
      this.proService.newArrival().subscribe(d=> {
        this.product=d;
        console.log(window.document.URL);
      });
    }
  }
 

  public buyPro(id:number){
    // this.pro.pid=sessionStorage.getItem("id");
    console.log("sri");
    this.proService.getProduct(id).subscribe(d=>{
      this.pro=d;
      // console.log(this.pro);
      this.router.navigateByUrl("/buy/"+id);
    });
  }

  i:number=0;
  check:any;
  public ratings(){
    for(this.i=1;this.i>=this.product.ratings;this.i++){
      if(this.product.pratings<=this.i){
        this.check=true;
        return this.check;
      }
      else{
        this.check=false;
        return this.check;
      }
    }
  }
}
