import { Component } from '@angular/core';

interface MenuItem {
  route: string,
  name: string
}


@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent {

  public menuItems: MenuItem[] = [
    {
      route: '/maps/fullscreen',
      name: 'FullScreen',
    },
    {
      route: '/maps/zoom-range',
      name: 'Zoom range',
    },
    {
      route: '/maps/markers',
      name: 'Markers',
    },
    {
      route: '/maps/properties',
      name: 'Properties',
    },
    {
      route: '/maps/conceptos',
      name: 'Concepts',
    },
  ]

}
