import { Component } from '@angular/core';

@Component({
  selector: 'app-decoradores',
  templateUrl: './decoradores.component.html',
  styleUrls: ['./decoradores.component.css']
})
export class DecoradoresComponent {

  classDecorator(constructor: any) {
    return class extends constructor {
      newProperty = "NewProperty";
      hello = "overrider"
    }
  }


  bb = class SuperClass {
    myProperty: string = "mi nombre es";
    print() {
      console.log("imprimir nombre")
    }
  }


  newClass = new this.bb




  ngOnInit() {

    console.log('holma mundo', this.newClass)
  }
}

