import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/auth/pages/interfaces/user';
import { AuthService } from 'src/app/auth/pages/services/auth.service';

@Component({
  selector: 'app-layout-page',
  templateUrl: './layout-page.component.html',
  styles: [
  ]
})
export class LayoutPageComponent {

  public sidebarItem = [
    {
      label: 'Listado',
      icon: 'label',
      url: './list'
    },
    {
      label: 'Añadir',
      icon: 'add',
      url: './new-hero'
    },
    {
      label: 'Buscar',
      icon: 'search',
      url: './search'
    },
    {
      label: 'Conceptos',
      icon: 'search',
      url: './concept'
    }
  ]

  constructor (private authServices: AuthService , private router: Router){}


  get user():User | undefined{
    return this.authServices.currentUser
  }

  onLogout(){
    this.authServices.logout()
    this.router.navigate(['/auth/login'])
  }
  
}
