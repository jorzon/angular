import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable, catchError, of, map, delay, tap } from 'rxjs';
import { Country } from '../interfaces/country';
import { CacheStore } from '../interfaces/cache-storage-interfaces';
import { Region } from '../interfaces/region.type';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  private apiUrl: string = 'https://restcountries.com/v3.1'


  public cacheStore: CacheStore = {
    byCapital: { term: '', countries: [] },
    byCountry: { term: '', countries: [] },
    byRegion: { region: '', countries: [] }
  }


  constructor(private http: HttpClient) {
    this.loadFromLocalStorage()
  }


  private getCountriesRequest(url: string): Observable<Country[]> {
    return this.http.get<Country[]>(url).pipe(
      catchError(() => of([])),
      // delay(2000)

    )
  }

  searchCountryAlphaCode(code: string): Observable<Country | null> {
    return this.http.get<Country[]>(`${this.apiUrl}/alpha/${code}`)
      .pipe(
        map(countries => countries.length > 0 ? countries[0] : null),
        catchError(() => of(null))
      )
  }

  searchCapital(term: string): Observable<Country[]> {
    const url = `${this.apiUrl}/capital/${term}`
    return this.getCountriesRequest(url).pipe(
      tap(
        countries => this.cacheStore.byCapital = { term: term, countries: countries }
      ),
      tap(() => this.saveToLocalStorage())
    )
  }

  searchByCountry(term: string): Observable<Country[]> {
    const url = `${this.apiUrl}/name/${term}`
    return this.getCountriesRequest(url)
      .pipe(
        tap(
          countries => this.cacheStore.byCountry = { term: term, countries: countries }
        ),
        tap(() => this.saveToLocalStorage())
      )
  }

  searchByRegion(term: Region): Observable<Country[]> {
    const url = `${this.apiUrl}/region/${term}`
    return this.getCountriesRequest(url).pipe(
      tap(
        countries => this.cacheStore.byRegion = { region: term, countries: countries }
      ),
      tap(() => this.saveToLocalStorage())
    )
  }

  private saveToLocalStorage() {
    localStorage.setItem('cacheStore', JSON.stringify(this.cacheStore))
  }

  private loadFromLocalStorage() {
    if (!localStorage.getItem('cacheStore')) return;
    this.cacheStore = JSON.parse(localStorage.getItem('cacheStore')!)
  }

}
