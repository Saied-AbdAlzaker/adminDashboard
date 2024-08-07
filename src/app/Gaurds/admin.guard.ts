import { ActivatedRouteSnapshot, CanActivate, CanActivateFn, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { AuthService } from '../Core/auth/Services/auth.service';

@Injectable({
  providedIn: 'root'
})

export class AdminGuard implements CanActivate {
  constructor(private _Router: Router, private _AuthService:AuthService) {
    _AuthService.getProfile();
   }
   
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    if (localStorage.getItem('userToken') !== null && localStorage.getItem('role') == 'SuperAdmin') {
      return true
    } else {
      this._Router.navigate(['/admin'])
      return false;
    }
  }
};
