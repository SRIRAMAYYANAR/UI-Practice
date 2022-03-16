import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Cart } from 'src/cart';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private data:HttpClient,private router:Router) { }

  public allproduct():Observable<Product[]> {
    return this.data.get<Product[]>('http://localhost:8080/allProducts');
  }

  public popProduct():Observable<Product[]> {
    return this.data.get<Product[]>('http://localhost:8080/popProducts');
  }
  public newArrival():Observable<Product[]> {
    return this.data.get<Product[]>('http://localhost:8080/newArrival');
  }
  public getProduct(pro:any) {
    return this.data.get('http://localhost:8080/getProduct?id='+pro);
  }

  public searchProduct():Observable<Product[]> {
    return this.data.get<Product[]>('http://localhost:8080/search');
  }

  public addProduct(pro:Product) {
    return this.data.post('http://localhost:8080/addProduct',pro);
  }

  public updateProduct(pro:Product){
    return this.data.post('http://localhost:8080/updateProduct',pro);
  }
  public deleteProduct(pro:Product){
    return this.data.post('http://localhost:8080/deleteProduct',pro);
  }

  public addUser(pro:Product) {
    return this.data.post('http://localhost:8080/add',pro);
  }

 public cart(cart:Cart){
   return this.data.post('http://localhost:8080/addCart',cart)
 }

 public countCart(id:any){
  return this.data.get('http://localhost:8080/countCart?id='+id)
}

public viewCart():Observable<Product[]> {
  return this.data.get<Product[]>('http://localhost:8080/viewCart');
}

}
