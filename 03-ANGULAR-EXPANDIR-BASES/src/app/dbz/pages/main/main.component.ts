import { Component } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-main-dbz',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  public character: Character[] = [
    {
      name : 'Krillin',
      power: 100
    },
    {
      name: 'Goku',
      power: 5000
    },
    {
      name: 'Vegeta',
      power: 2500
    }
  ]
}
