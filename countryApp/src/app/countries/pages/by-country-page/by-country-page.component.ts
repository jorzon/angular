import { Component } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';


@Component({
  selector: 'app-by-country-page',
  templateUrl: './by-country-page.component.html',
  styles: [
  ]
})
export class ByCountryPageComponent {


  public countries: Country[] = []

  public searchByCountry(term:string):void{
    console.log(term)
    this.countryServices.searchByCountry(term).subscribe((countries) =>{
      this.countries = countries
    })
  }

  constructor( private countryServices: CountriesService ){

  }
 
}
