import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { Subscription, interval } from 'rxjs';

@Component({
  selector: 'products-price',
  templateUrl: './price.component.html',
  styleUrls: ['./price.component.css']
})
export class PriceComponent implements OnInit , OnChanges , OnDestroy {

  @Input() price:number  = 0
  public interval$?: Subscription


  ngOnInit(): void {
    console.log('price ngOnInit')

    this.interval$ = interval(1000).subscribe(value => console.log(value))
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('price ngOnChanges' , {changes})
  }
  ngOnDestroy(): void {
    console.log('price ngOnDestroy')
    this.interval$?.unsubscribe()
  }

  
}
