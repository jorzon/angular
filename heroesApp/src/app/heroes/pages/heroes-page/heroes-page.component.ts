import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { ActivatedRoute, Router} from '@angular/router';
import { switchMap , delay } from 'rxjs';
import { Hero } from '../../interfaces/hero';

@Component({
  selector: 'app-heroes-page',
  templateUrl: './heroes-page.component.html',
  styles: [
  ]
})
export class HeroesPageComponent implements OnInit {

  public hero?: Hero 
  

  constructor(private heroesService : HeroesService , private  activatedRouted: ActivatedRoute , private router: Router){}

  
  goBack():void{
    this.router.navigateByUrl('/heroes/list')
  }

  ngOnInit(): void {
    this.activatedRouted.params.pipe(
      delay(500),
      switchMap(({id}) => this.heroesService.getHeroById(id))
    ).subscribe(hero => {
      if(!hero) return this.router.navigate(['/heroes/list'])
      this.hero = hero
      return 
    })
    
  }

}
