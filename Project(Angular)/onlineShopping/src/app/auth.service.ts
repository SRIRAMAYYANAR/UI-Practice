import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './authuser';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
 

  constructor(private http: HttpClient) { }

  public addUser(usr:User) {
    return this.http.post('http://localhost:8080/addauth',usr);
  }

  public getAuth(usr:any) {
    return this.http.get('http://localhost:8080/getAuth?uid='+usr);
  }

  public updateAuth(usr:User){
    return this.http.post('http://localhost:8080/updateAuth',usr);
  }

  public deleteAuth(usr:User){
    return this.http.post('http://localhost:8080/deleteAuth',usr);
  }
}
