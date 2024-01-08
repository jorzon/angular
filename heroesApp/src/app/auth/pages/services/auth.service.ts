import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environments } from 'src/environments/environments';
import { User } from '../interfaces/user';
import { Observable , catchError, of, tap , map } from 'rxjs';
import { HeroesService } from 'src/app/heroes/services/heroes.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl: string = environments.baseUrl
  private user?: User 

  constructor(private http: HttpClient , heroesServices: HeroesService) { }

  get currentUser():User|undefined {
    if(!this.user) return undefined
    return structuredClone(this.user)
  }

  login(email:string , password:string):Observable<User>{
    return this.http.get<User>(`${this.baseUrl}/users/1`).pipe(
      tap(user => {this.user = user}),
      tap(user => {localStorage.setItem('token' , user.email)})
    )
  }

  checkAuth(): Observable<boolean> {
    if(!localStorage.getItem('token')) return of(false)
    const token = localStorage.getItem('token')
    return this.http.get<User>(`${this.baseUrl}/users/1`)
    .pipe(
      tap(user => this.user = user),
      map(user => !!user), //no tienevalor , ! , !! true
      catchError(err => of(false))
    )
  }

  logout(){
    this.user = undefined
    localStorage.clear()
  }
}
