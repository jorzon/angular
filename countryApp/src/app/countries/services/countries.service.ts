import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable, catchError, of , map } from 'rxjs';
import { Country } from '../interfaces/country';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  private apiUrl: string = 'https://restcountries.com/v3.1'
  constructor(private http: HttpClient) { }


  searchCountryAlphaCode(code: string): Observable<Country | null >  {
    return this.http.get<Country[]>(`${this.apiUrl}/alpha/${code}`).pipe(
      map(countries => countries.length > 0 ? countries[0] : null),
      catchError(() => of(null))
    )
  }


  searchCapital(term: String): Observable<Country[]> {
    return this.http.get<Country[]>(`${this.apiUrl}/capital/${term}`).pipe(
      catchError(error => {
        console.log(error)
        return of([])
      })
    )
  }


  searchByCountry(term: String): Observable<Country[]> {
    return this.http.get<Country[]>(`${this.apiUrl}/name/${term}`).pipe(
      catchError(error => {
        console.log(error)
        return of([])
      })
    )
  }

  searchByRegion(term: String): Observable<Country[]> {
    return this.http.get<Country[]>(`${this.apiUrl}/region/${term}`).pipe(
      catchError(error => {
        console.log(error)
        return of([])
      })
    )
  }

}
