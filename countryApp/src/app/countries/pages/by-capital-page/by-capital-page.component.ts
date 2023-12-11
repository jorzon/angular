import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styles: [
  ]
})
export class ByCapitalPageComponent implements OnInit {

  public countries: Country[] = []
  public isLoaing: boolean = false
  public initialValue: string = ''

  constructor(private countryServices: CountriesService) {}

  ngOnInit(){
    this.countries = this.countryServices.cacheStore.byCapital.countries
    this.initialValue = this.countryServices.cacheStore.byCapital.term
    
  }

  public searchByCapital(term: string): void {
    console.log(term)
    this.isLoaing = true
    this.countryServices.searchCapital(term).subscribe((countries) => {
      this.countries = countries
      this.isLoaing = false
    })
  }

  



}
