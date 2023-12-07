import { Component } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: [
  ]
})
export class ByRegionPageComponent {
  //earchByRegion

  public countries: Country[] = []

  public searchByRegion(term:string):void{
    console.log(term)
    this.countryServices.searchByRegion(term).subscribe((countries) =>{
      this.countries = countries
    })
  }

  constructor( private countryServices: CountriesService ){

  }


}
