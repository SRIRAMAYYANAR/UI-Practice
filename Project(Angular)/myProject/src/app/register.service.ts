import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginVal } from './login';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private data:HttpClient) { }

  public regServ(data:LoginVal){
      return this.data.post('http://localhost:8080/register',data);
  }
}
