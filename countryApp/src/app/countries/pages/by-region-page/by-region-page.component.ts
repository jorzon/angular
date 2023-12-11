import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountriesService } from '../../services/countries.service';
import { Region } from '../../interfaces/region.type';




@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: [
  ]
})
export class ByRegionPageComponent implements OnInit {
  //earchByRegion

  public countries: Country[] = []


  public regions: Region[] = ['Africa' , 'Americas' , 'Asia' , 'Europe' , 'Oceania']
  public selectedRegion ?: Region

  public searchByRegion(region : Region):void{
    this.selectedRegion = region
    this.countryServices.searchByRegion(region).subscribe((countries) =>{
      this.countries = countries
    })
  }

  constructor( private countryServices: CountriesService ){

  }

  ngOnInit(): void {
    this.countries = this.countryServices.cacheStore.byRegion.countries
    this.selectedRegion = this.countryServices.cacheStore.byRegion.region
  }


}
