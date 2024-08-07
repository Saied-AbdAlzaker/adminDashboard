import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  imageUrl:string='http://foodsystem.tryasp.net';

  constructor(private _http:HttpClient) { }

  getCategory(data:any):Observable<any>
  {
    return this._http.get(`http://foodsystem.tryasp.net/Category`, {params: data})
  }
}
