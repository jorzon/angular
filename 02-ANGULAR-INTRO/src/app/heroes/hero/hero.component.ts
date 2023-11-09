import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  name:string = 'ironman'
  age: number = 29

  //METODO
  get capitalizedName():string{
    return this.name.toUpperCase()
  }

  getHeroesDescription():string{
    return `${this.name} - ${this.age}`
  }

  changeHero():void{
    this.name = 'SpiderMan'
  }

  changeAge():void{
    this.age = 99
  }

  reset():void{
    this.name = 'ironman'
    this.age = 29
  }

}
