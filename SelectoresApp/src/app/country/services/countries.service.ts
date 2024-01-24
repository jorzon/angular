import { Injectable } from '@angular/core';
import { Country, Region, SmallCountry } from '../interfaces/country.interfaces';
import { HttpClient } from '@angular/common/http'
import { Observable , of, tap , pipe , map, combineLatest } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  private _region:Region[] = [Region.Africa , Region.Americas , Region.Asia , Region.Europe , Region.Europe]

  private apiUrl: string = 'https://restcountries.com/v3.1'
  
  get regions():Region[]{
    return [...this._region]
  }

  constructor(private http:HttpClient) { }


  getCountriesByRegion(region:Region): Observable<SmallCountry[]>{
    if(!region) return of([])
    const url = `${this.apiUrl}/region/${region}`
    return this.http.get<Country[]>(url)
    .pipe(
      map(countries => countries.map( country =>({
        name:country.name.common,
        cca3: country.cca3,
        borders: country.borders ?? []
      })))
    )
  }


  getCountryByAlphaCode(alphaCode: string) : Observable<SmallCountry>{
    const url = `${this.apiUrl}/alpha/${alphaCode}?fields=cca3,name,borders`
    return this.http.get<Country>(url)
    .pipe(
      map(country => ({
        name:country.name.common,
        cca3: country.cca3,
        borders: country.borders ?? []
      })),
      tap(
        response => console.log({response})
      )
    )
  }


  getCountryBordersByCodes(borders:string[]): Observable<SmallCountry[]>{
    if(!borders || borders.length === 0 ) return of([])
    const countriesRequest:Observable<SmallCountry>[] = []

    borders.forEach(code => {
      const request = this.getCountryByAlphaCode(code)
      countriesRequest.push(request)
    })

   return combineLatest(countriesRequest )
  }

}
