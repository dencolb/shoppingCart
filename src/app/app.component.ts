import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './shared/service/auth.service';
import { UserService } from './shared/service/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private auth:AuthService, 
    private route:Router,
    private userService:UserService
    ){
    auth.user$.subscribe(user =>{
      if(user){
        userService.save(user);
       let returnUrl = localStorage.getItem('returnUrl');
       if(returnUrl){
         localStorage.removeItem('returnUrl');
          route.navigateByUrl(returnUrl);
       }
        route.navigateByUrl(returnUrl);
        
      }
    })
  }
}
