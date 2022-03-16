import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Cart } from 'src/cart';
import { Product } from '../product';
import { ProductService } from '../product.service';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}
@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})

export class ViewProductComponent implements OnInit {
  tiles: Tile[] = [
    {text: 'One', cols: 3, rows: 1, color: 'lightblue'},
    {text: 'Two', cols: 1, rows: 2, color: 'lightgreen'},
    {text: 'Three', cols: 1, rows: 1, color: 'lightpink'},
    {text: 'Four', cols: 2, rows: 1, color: '#DDBDF1'},
  ];
  cartPro:Cart;
  constructor(private productService:ProductService,private actRoute:ActivatedRoute) {
    this.cartPro=new Cart();
   }
   id:any;
   pro:any;
  ngOnInit(): void {
    this.id=this.actRoute.snapshot.paramMap.get('id');
    this.getprd();    
  }
  public getprd(){
    this.productService.getProduct(this.id).subscribe(d=>{
      this.pro=d;
      console.log(this.pro);
    })
  }

result:any;
  public cart(id:any){
    this.cartPro.pid=id;
    this.cartPro.rid=sessionStorage.getItem("id");
    this.productService.cart(this.cartPro).subscribe(d=>{
      // console.log(d);
      // console.log(this.result);
      this.result = this.countCart(this.cartPro.rid);
    })
  }

  public countCart(id:any){
    this.productService.countCart(id).subscribe(d=>{
      this.result=d;
      console.log(this.result);
      sessionStorage.setItem("count",this.result);
      return this.result;
    })
  }
}
