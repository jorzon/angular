import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-conceptos',
  templateUrl: './conceptos.component.html',
  styles: [
  ]
})
export class ConceptosComponent  implements OnInit{

  public name:string = 'joRZOn delGADo'
  public items: MenuItem[] | undefined;
  
  constructor(private primengConfig: PrimeNGConfig) {}
  ngOnInit() {
      this.primengConfig.ripple = true;


      this.items = [
        {
          label: 'Pipes de angular', 
          icon: 'pi pi-desktop',
          items: [
            {
              label: 'Textos y Fechas',
              icon: 'pi pi-align-left',
              
            },
            {
              label: 'Números',
              icon: 'pi pi-dollar',
              
            },
            {
              label: 'No comunes',
              icon: 'pi pi-globe',
              
            },
          ]
        },
        {
          label: 'Pipes personalizados',
          icon: 'pi pi-cog',
          items: [
            {
              label: 'Otros Elementos',
              icon: 'pi pi-cog'
            }
          ]
        }
  
      ];
      

  }
}
