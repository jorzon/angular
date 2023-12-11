import { Component , OnInit } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';


@Component({
  selector: 'app-by-country-page',
  templateUrl: './by-country-page.component.html',
  styles: [
  ]
})
export class ByCountryPageComponent implements OnInit {
  

  public countries: Country[] = []
  public initialValue: string = ''

  public searchByCountry(term:string):void{
    console.log(term)
    this.countryServices.searchByCountry(term).subscribe((countries) =>{
      this.countries = countries
    })
  }

  constructor( private countryServices: CountriesService ){}

  ngOnInit(): void {
    this.countries = this.countryServices.cacheStore.byCountry.countries
    this.initialValue = this.countryServices.cacheStore.byCountry.term
  }
 
}
