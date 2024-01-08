import { Component, OnInit } from '@angular/core';
// import { AuthService } from './auth/pages/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  title = 'heroesApp';

  // constructor (private authServices: AuthService){}

  // ngOnInit(){
  //   this.authServices.checkAuth().subscribe(
  //     ()=>{
  //       console.log('check finish')
  //     }
  //   )
  // }
}
