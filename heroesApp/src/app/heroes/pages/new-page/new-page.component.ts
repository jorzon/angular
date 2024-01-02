import { Component, OnInit } from '@angular/core';
import { Hero, Publisher } from '../../interfaces/hero';
import { ActivatedRoute, Router} from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';
import { HeroesService } from '../../services/heroes.service';
import { filter, switchMap, tap } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../../components/confirm-dialog/confirm-dialog.component';


@Component({
  selector: 'app-new-page',
  templateUrl: './new-page.component.html',
  styles: [
  ]
})
export class NewPageComponent implements OnInit {



  public heroForm = new FormGroup({
    id: new FormControl<string>(''),              
    superhero: new FormControl<string>('' , {nonNullable: true}),     
    publisher: new FormControl<Publisher>(Publisher.MarvelComics),
    alter_ego: new FormControl<string>(''),     
    first_appearance: new FormControl<string>(''),
    characters: new FormControl<string>(''),    
    query: new FormControl<string>(''),         
    alt_img: new FormControl<string>('')
  })

  constructor(
    private heroesService: HeroesService,
    private  activatedRouted: ActivatedRoute , 
    private router: Router,
    private _snackBar: MatSnackBar,
    public dialog: MatDialog
    ){}

  get currentHero():Hero{
    const hero = this.heroForm.value as Hero
    return hero
  }


  ngOnInit(): void {
    if(!this.router.url.includes('edit'))return

    this.activatedRouted.params.pipe(
      switchMap(({id}) => this.heroesService.getHeroById(id))
    ).subscribe( hero =>{
        if(!hero) return this.router.navigate(['/heroes/list'])
        this.heroForm.reset(hero)
      return
      }
    )
  }

  onSubmit():void{
    if(this.heroForm.invalid) return
    console.log(this.currentHero)

    if(this.currentHero.id){
      console.log(this.currentHero)
      this.heroesService.updateHero(this.currentHero)
      .subscribe(
        hero =>{
          //TODO: mostrar snackbar actualizado
          this.showSnackBar(`${hero.superhero} updated!`)
          this.router.navigate(['/heroes/list'])
        }
      )
      return;
    }

    this.heroesService.addHero(this.currentHero)
    .subscribe( hero =>
      //TODO: mostrar snackbar, y navegar a heroes/edit/hero.id
      {
        this.router.navigate(['/heroes/list'])
        this.showSnackBar(`${hero.superhero} was created!`)  
      }
      
    )

      
  }


  onDelete():void{
    if(!this.currentHero.id) throw Error('id is requerid')
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: this.heroForm.value
    });
    dialogRef.afterClosed()
      .pipe(
        filter(result => result),
        switchMap(() =>this.heroesService.deleteHero(this.currentHero.id)),
        filter(result => result)
      )
      .subscribe(() => {
        this.router.navigate(['/heroes/list'])
        this.showSnackBar(`${this.currentHero.superhero} was deleted!`)  
      }
    );

    
    
  }

  showSnackBar(message:string){
    this._snackBar.open(message , 'done' , {
      duration: 4000
    })
  }

  public editHero?:Hero

  public publishers = [
    {
      id: 'DC Comics' , value: 'DC - Comics', data:'dc'
    },
    {
      id: 'Marvel Comics' , value: 'Marvel - Comics', data:'marvel'
    }
  ]



}
