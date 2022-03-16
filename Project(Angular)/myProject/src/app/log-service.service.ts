import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginVal } from './login';

@Injectable({
  providedIn: 'root'
})
export class LogServiceService {

  constructor(private data:HttpClient) { }

  // public logServ(dataDB:LoginVal){
  //     return this.data.post("http://localhost:8080/login",dataDB);
  // }
}
