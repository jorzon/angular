import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CountriesService } from '../../services/countries.service';
import { Region, SmallCountry } from '../../interfaces/country.interfaces';
import { switchMap , tap , filter } from 'rxjs';

@Component({
  selector: 'app-selector-page',
  templateUrl: './selector-page.component.html',
  styleUrls: ['./selector-page.component.css']
})
export class SelectorPageComponent implements OnInit {

  public countriesByRegion: SmallCountry[] = []

  public border: SmallCountry[] = []


  public myForm: FormGroup = this.fb.group({
    region: ['' , [Validators.required] , []],
    country: ['' , [Validators.required] , []],
    borders: ['' , [Validators.required] , []]
  })


 

  constructor(
    private fb:FormBuilder,
    private countriesService: CountriesService
  ){}


  ngOnInit(): void {
    this.onRegionChanged()
    this.OnCountryChanged()
  }


  onRegionChanged():void{
    this.myForm.get('region')?.valueChanges
    .pipe(
      tap(()=> this.myForm.get('country')!.setValue('')),
      tap(()=> this.border = []),
      switchMap(
        region => this.countriesService.getCountriesByRegion(region)
      )
    )
    .subscribe(
      countries => {
        this.countriesByRegion = countries
        console.log(this.countriesByRegion.length)
      }
    )
  }

  OnCountryChanged():void{
    this.myForm.get('country')!.valueChanges
    .pipe(
      tap(()=> this.myForm.get('borders')!.setValue('')),
      filter((value:string) => value.length > 0),
      switchMap(
        alphaCode => this.countriesService.getCountryByAlphaCode(alphaCode)
      ),
      switchMap(
        country => this.countriesService.getCountryBordersByCodes(country.borders ?? [])
      )
    )
    .subscribe(
      countries => {
        this.border = countries
        console.log(this.border)
      }
    )
  }

  get regions():Region[]{
    return this.countriesService.regions
  }

  


}
