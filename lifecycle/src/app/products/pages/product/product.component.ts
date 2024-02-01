import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'products-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit , OnChanges , DoCheck , AfterContentInit,AfterContentChecked , AfterViewInit , AfterViewChecked , OnDestroy {


  public isProductVisible: boolean = false
  public currentPrice: number = 10

  constructor(){
    console.log('soy el constructor')
  }

  ngOnInit(): void {
    console.log('soy el OnInit')
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('soy el OnChanges')
    console.log(changes)
  }
  ngDoCheck(): void {
    console.log('soy el DoCheck')
  }
  ngAfterContentInit(): void {
    console.log('soy el AfterContentInit')
  }
  ngAfterContentChecked(): void {
    console.log('soy el AfterContentChecked')
  }
  ngAfterViewInit(): void {
    console.log('soy el AfterViewInit')
  }
  ngAfterViewChecked(): void {
    console.log('soy el AfterViewChecked')
  }
  ngOnDestroy(): void {
    console.log('soy el onDestroy')
  }


    increasePrice(){
     this.currentPrice++ 
    }

}
