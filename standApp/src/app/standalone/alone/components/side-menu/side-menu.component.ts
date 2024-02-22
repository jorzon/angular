import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

interface MenuItem {
  route: string,
  name: string
}


@Component({
  selector: 'side-menu',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent {

  public menuItems: MenuItem[] = [
    {
      route: '/concept',
      name: 'Conceptos',
    },
    {
      route: '/alone',
      name: 'StandAlone',
    }
  ]


}
