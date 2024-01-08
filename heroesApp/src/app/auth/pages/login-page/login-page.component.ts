import { Component } from '@angular/core';
import { HeroesService } from 'src/app/heroes/services/heroes.service';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styles: [
  ]
})
export class LoginPageComponent {


  constructor(private authService: AuthService , private router: Router){}

  onLogin(){
    this.authService.login('jorzon' , '123456').subscribe(
      user =>{
        console.log(user)
        this.router.navigate(['/'])
      }
    )
  }
}
