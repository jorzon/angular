import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import {v4 as uuid} from 'uuid'

@Injectable({
  providedIn: 'root'
})
export class DbzService {

  public character: Character[] = [
    {
      name : 'Krillin',
      power: 100,
      id: uuid()
    },
    {
      name: 'Goku',
      power: 5000,
      id: uuid()
    },
    {
      name: 'Vegeta',
      power: 2500,
      id: uuid()
    },
    {
      name: 'MajonBoo',
      power: 9000,
      id: uuid()
    }
  ]


  getNewCharacter(character: Character){

    const newCharacter:Character = {...character, id: uuid()}
    this.character.push(newCharacter)
    console.log(this.character)
  }

  // getDeleteCharacterId(index:number){
  //   this.character.splice(index,1)
  //   console.log(this.character)
  // }

  deleteCharacterById(id:string):void{
    this.character = this.character.filter(item => item.id !== id)
    console.log(this.character)
  }

  
  constructor() { }
}
