import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { jwtDecode } from 'jwt-decode';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  role:string | null = '';

  constructor(private _HttpClient:HttpClient) {
    if(localStorage.getItem('role') !== null)
    {
      this.getProfile();
    }
  }

  getProfile()
  {
    let encoded: any = localStorage.getItem('userToken');

    let decoded: any = jwtDecode(encoded);

    console.log(decoded);

    localStorage.setItem('role' , decoded.userGroup);
    localStorage.setItem('userName' , decoded.userName);
    localStorage.setItem('userEmail' , decoded.userEmail);


    this.getRole();
  }

  getRole()
  {
    if(localStorage.getItem('userToken') !== null && localStorage.getItem('role') )
    {
      this.role = localStorage.getItem('role') ;
    }
  }

  onRegister(data: any):Observable<any>
  {
    return this._HttpClient.post('http://foodsystem.tryasp.net/Auth/Register' , data)
  }

  onLogin(data: any):Observable<any>
  {
    return this._HttpClient.post('http://foodsystem.tryasp.net/Auth/Login' , data)
  }

}
