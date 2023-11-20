import { Component, Input , EventEmitter, Output} from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  
  @Input() public characterList: Character[] = []



  @Output() 
  public onDeleteCharacterId: EventEmitter<string> = new EventEmitter()


  onDeleteCharacter(id?:string){
    if(!id) return
    this.onDeleteCharacterId.emit(id)
  }




}
