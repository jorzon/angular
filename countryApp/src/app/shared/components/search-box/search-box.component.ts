import { Component, Input, Output , EventEmitter } from '@angular/core';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styles: [
  ]
})
export class SearchBoxComponent {
  @Input() public placeholder:string = '';

  @Output() 
  public onValue: EventEmitter<string> = new EventEmitter()


  emitValue(value?:string){
    this.onValue.emit(value)
  }


  //metodo valueInput -- a la funcion o metodo ongetValue

}