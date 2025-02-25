import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  baseUrl = "http://localhost:7002/api/accounts"
  constructor(
    private http: HttpClient
  ) { }
  authenticate(email: string, password: string)
      : Observable<AuthenticationResponse> {
    var body = JSON.stringify({email:email, password:password}); 
    var headers = { 
      'Content-Type':'application/json'
    }
    return this.http.post<AuthenticationResponse>(
        this.baseUrl + '/signin', 
        body, {
        headers: {...headers}
      });
  }
}
export class AuthenticationResponse{
  token: string;
  userId: number;
  userName: string;
  expires: string;
  roleName: string;
  constructor(token: string, userId: number, 
    username: string, expires: string,  roleName: string){
    this.token = token;
    this.userId = userId;
    this.roleName = roleName;
    this.userName = username;
    this.expires = expires;
  }
}