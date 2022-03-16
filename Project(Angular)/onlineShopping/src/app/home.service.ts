import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Register } from './register';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http:HttpClient) { }

  public search(search:any) {
    return this.http.get('http://localhost:8080/search?search='+search);
  }

  public register(reg:Register){
    return this.http.post('http://localhost:8080/register',reg);
  }

  public login(log:Register){
    return this.http.post('http://localhost:8080/login',log);
  }

  session:any;
  public outFun(){
    this.session = sessionStorage.getItem('uname');
    if(this.session){
      return true;
    }
    else{
      return false;
    }
  }
}