import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { map } from 'rxjs/operators';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService:AuthService,
    private route:Router) { }

    canActivate(route:ActivatedRouteSnapshot,state:RouterStateSnapshot){
     return this.authService.user$.pipe(map((user=>{
        if(user){
          return true;
        }else{
          this.route.navigate(['/login'], 
          {queryParams:{returnUrl:state.url}
          });
          return  false;
        }
      })))
    }

}
