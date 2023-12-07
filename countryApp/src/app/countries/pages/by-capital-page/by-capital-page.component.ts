import { Component } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styles: [
  ]
})
export class ByCapitalPageComponent {

  public countries: Country[] = []

  public searchByCapital(term:string):void{
    console.log(term)
    this.countryServices.searchCapital(term).subscribe((countries) =>{
      this.countries = countries
    })
  }

  constructor( private countryServices: CountriesService ){

  }

  

}
