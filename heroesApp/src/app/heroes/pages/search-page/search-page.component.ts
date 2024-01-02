import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Hero } from '../../interfaces/hero';
import { HeroesService } from '../../services/heroes.service';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styles: [
  ]
})
export class SearchPageComponent  {
  constructor( private heroesService: HeroesService){}

  public searchInput = new FormControl('')
  public heroes:Hero[] = []
  public selectedHero?: Hero 

  searchHero(){
    const value:string = this.searchInput.value || ''
    this.heroesService.getSuggestion(value)
    .subscribe(
      heroes => this.heroes = heroes
    )
  }

  onSelectedOption( event : MatAutocompleteSelectedEvent  ):void{
    if(!event.option.value) return
    const hero: Hero = event.option.value
    this.searchInput.setValue(hero.superhero || null)
    this.selectedHero = hero

  }

}
