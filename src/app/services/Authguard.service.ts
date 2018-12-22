import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { AuthService } from './Auth.service';


@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private authService : AuthService , private router : Router)
    {

    }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        if(this.authService.isAuth) {
          return true;
        } else {
          this.router.navigate(['/auth']);
        }
      }
}