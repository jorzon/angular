import { Component } from '@angular/core';
import { Hero } from '../../interfaces/hero.interfaces';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styles: [
  ]
})
export class OrderComponent {
  public isUpperCase: boolean = false
  public icon: boolean = false
  public nameIcon: string = 'pi pi-search' 
  public orderBy: keyof Hero | '' = ''

  public heroes: Hero[] = [
    {
      name: 'Superman',
      canFly: true,
      color: 'blue',
    },
    {
      name: 'Batman',
      canFly: true,
      color: 'black',
    },
    {
      name: 'Daredevil',
      canFly: false,
      color: 'red',
    },
    {
      name: 'Robin',
      canFly: false,
      color: 'green',
    }
  ]

  public toggleUpperCase():void{
    this.isUpperCase = !this.isUpperCase

  }

  public changeOrder(value: keyof Hero){
    this.orderBy = value
  }
}
