import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CountriesService } from '../../services/countries.service';
import { switchMap } from 'rxjs';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-country-page',
  templateUrl: './country-page.component.html',
  styleUrls: ['./country-page.component.css']
})
export class CountryPageComponent implements OnInit {

  constructor(private activateRoute: ActivatedRoute, private countryServices: CountriesService, private router: Router) { }

  //?: en algun momento sera nulo o si existe
  public country ?: Country


  //FORMA 1 - OBSERVABLE HELL
  // ngOnInit(): void {
  //  HAGO DESTRUCTURACION
  //   this.activateRoute.params.subscribe(({id}) =>{
  //     console.log(id)
  //     this.countryServices.searchCountryAlphaCode(id).subscribe(country =>{
  //       console.log(country)
  //     })
  //   })
  // }

  //FORMA 2 - FUNCION 
  // ngOnInit(): void {
  //  HAGO DESTRUCTURACION
  //   this.activateRoute.params.subscribe(({id}) =>{
  //     console.log(id)
  //     searchCountry(id)
  //   })
  // }


  //FORMA 3 - SWITHCMAP
  ngOnInit(): void {
    this.activateRoute.params
      .pipe(
        switchMap(param => this.countryServices.searchCountryAlphaCode(param['id']))
      )
      .subscribe(country=> {
        console.log(country)
        if(!country){
          this.router.navigateByUrl('')
        } else {
          console.log('existe')
          this.country = country
        }
      })
  }


  // searchCountry(code:string):void{
  //   this.countryServices.searchCountryAlphaCode(code).subscribe(country =>{
  //     console.log(country)
  //   })
  // }






}
