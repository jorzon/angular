import { Component } from '@angular/core';

@Component({
  selector: 'app-genericos',
  templateUrl: './genericos.component.html',
  styleUrls: ['./genericos.component.css']
})
export class GenericosComponent {
  whatMyTyper<T>(argument: T): T {
    return argument
  }

  IamString = this.whatMyTyper('Hola mundo')
  IamNumber = this.whatMyTyper<number>(100)
  IamArray = this.whatMyTyper([, 2, 3, 4, 5])

  ngOnInit() {
    console.log(this.IamString.split(" "), this.IamNumber.toExponential(2), this.IamArray.join('-'))
  }
}


