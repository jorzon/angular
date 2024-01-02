import { Component } from '@angular/core';
import { Hero } from '../../interfaces/hero';
import { HeroesService } from '../../services/heroes.service';
import { delay } from 'rxjs';

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styles: [
  ]
})
export class ListPageComponent {
  public heroes: Hero[] = []

  constructor(private heroesServices: HeroesService){}

  ngOnInit(){
    this.heroesServices.getHeroes().pipe(
      delay(500)
    )
    .subscribe(heroes => this.heroes = heroes)
  }
}
