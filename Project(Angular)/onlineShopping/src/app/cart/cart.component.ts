import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(private productService:ProductService,private actRoute:ActivatedRoute,private router:Router) { }

 
  id:any;
  pro:any;
 ngOnInit(): void {
   this.id=this.actRoute.snapshot.paramMap.get('id');
   this.viewCartProduct()
 }

 public viewCartProduct(){
  return this.productService.viewCart().subscribe(result=>{
    this.pro=result;
    console.log(result);
  })
}
public delete(id:any){
  return true;
}


}
