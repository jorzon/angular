import { Component, signal } from '@angular/core';

interface MenuItem {
  title: string,
  router: string
}

@Component({
  selector: 'app-side-mneu',
  templateUrl: './side-mneu.component.html',
  styleUrls: ['./side-mneu.component.css']
})
export class SideMneuComponent {
  public menuItem: MenuItem[] = [
    {
      title: 'Contador',
      router: 'counter'
    },
    {
      title: 'Info usuario',
      router: 'user-info'
    },
    {
      title: 'Propiedades',
      router: 'properties'
    }
  ]


  public sides = signal<MenuItem[]>([
    {
      title: 'Contador',
      router: 'counter'
    },
    {
      title: 'Info usuario',
      router: 'user-info'
    },
    {
      title: 'Propiedades',
      router: 'properties'
    },
    {
      title: 'Conceptos',
      router: 'concept'
    }
  ])


  public name = signal<string>('Jorzon')
}
