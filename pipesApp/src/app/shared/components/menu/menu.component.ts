import { Component , OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';



@Component({
  selector: 'shared-menu',
  templateUrl: './menu.component.html',
  styles: [
  ]
})
export class MenuComponent implements OnInit {

  
  public itemsOptions: MenuItem[] | undefined;

  ngOnInit() {
    
    this.itemsOptions = [
        {
            label: 'Pipes de angular', 
            icon: 'pi pi-desktop',
            items: [
              {
                label: 'Textos y Fechas',
                icon: 'pi pi-align-left',
                routerLink: '**'
              },
              {
                label: 'Números',
                icon: 'pi pi-dollar',
                routerLink: 'numbers'
              },
              {
                label: 'No comunes',
                icon: 'pi pi-globe',
                routerLink: 'uncommon'
              },
            ]
          },
          {
            label: 'Pipes personalizados',
            icon: 'pi pi-cog',
            items: [
              {
                label: 'Otros Elementos',
                icon: 'pi pi-cog',
                routerLink: 'custom'
              }
            ]
          },
          {
            label: 'Conceptos',
            icon: 'pi pi-cog',
            routerLink: 'concept'
          }
  ];
  }


}
