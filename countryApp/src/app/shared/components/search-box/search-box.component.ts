import { Component, Input, Output , EventEmitter , OnInit, OnDestroy } from '@angular/core';
import {Subject , debounceTime} from 'rxjs'

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styles: [
  ]
})
export class SearchBoxComponent implements OnInit , OnDestroy {

  private debouncer:Subject<string> = new Subject<string>()

  @Input() public placeholder:string = '';

  @Output() 
  public onValue: EventEmitter<string> = new EventEmitter()


  @Output() 
  public onDebounce: EventEmitter<string> = new EventEmitter()


  @Input() public initialValue:string = '' 


  ngOnInit(): void {
    this.debouncer
    .pipe(
      debounceTime(100)
    )
    .subscribe(value =>{
      this.onDebounce.emit(value)
    })
  }

  ngOnDestroy(): void {
    console.log('destruido')
    this.debouncer.unsubscribe()
  }

  emitValue(value?:string){
    this.onValue.emit(value)
  }


  emitKeyPress(searchTerm:string):void{
    this.debouncer.next(searchTerm)
  }


  //metodo valueInput -- a la funcion o metodo ongetValue

}