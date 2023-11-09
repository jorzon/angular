import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  heroNames: string[] = ['spiderman', 'hulk', 'ironman', 'she hulk', 'thor']
  public deleteHeroe?:string

  removeLastHero(): void {
    this.deleteHeroe = this.heroNames.pop()

  }
}
