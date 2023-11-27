
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SearchResponse } from '../interfaces/gifs.interfaces';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private _gifList: Gif[] = []
  private _tagHistory: string[] = [];

  private apiKey: string = '8O0Dis7lsL9gsFsZRkYi56snUA9PXQDO'
  private serviceURL: string = 'https://api.giphy.com/v1/gifs'

  constructor(private http: HttpClient) {
    this.readLocalStorage()
  }

  get tagHistory() {
    return [...this._tagHistory]
  }

  get gifList() {
    return [...this._gifList]
  }



  organizeHistory(tag: string): void {
    tag = tag.toLocaleLowerCase().trim()

    if (this._tagHistory.includes(tag)) {
      this._tagHistory = this._tagHistory.filter(oldTag => oldTag != tag)
    }

    this._tagHistory.unshift(tag)
    this._tagHistory = this.tagHistory.splice(0, 10)

    this.saveLocalStorage()

    console.log(this._tagHistory)
  }

  private saveLocalStorage(): void {
    localStorage.setItem('history', JSON.stringify(this._tagHistory))
  }

  private readLocalStorage(): void {
    if (!localStorage.getItem('history')) return
    this._tagHistory = JSON.parse(localStorage.getItem('history')!)
    
    if(this._tagHistory.length === 0) return
    this.searchTag(this._tagHistory[0])
  }

  searchTag(tag: string): void {

    if (tag.length == 0) return
    this.organizeHistory(tag)

    const datos = new HttpParams()
      .set('api_key', this.apiKey)
      .set('q', tag)
      .set('limit', '10')



    this.http.get<SearchResponse>(`${this.serviceURL}/search`, { params: datos })
      .subscribe((resp) => {
        this._gifList = resp.data
        console.log({ gifs: this._gifList })
      })

    //FOMA 1
    // fetch(`https://api.giphy.com/v1/gifs/search?api_key=8O0Dis7lsL9gsFsZRkYi56snUA9PXQDO&q=valorant&limit=10`)
    // .then(resp => resp.json())
    // .then(data=> console.log(data))


    //FORMA 2
    // const resp = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=8O0Dis7lsL9gsFsZRkYi56snUA9PXQDO&q=valorant&limit=10`)
    // const data = await resp.json()
    // console.log(data)
  }

}
