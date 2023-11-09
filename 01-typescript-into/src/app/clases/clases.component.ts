import { Component } from '@angular/core';

@Component({
  selector: 'app-clases',
  templateUrl: './clases.component.html',
  styleUrls: ['./clases.component.css']
})
export class ClasesComponent {

  //FORMA 01
  aa = class Persona {
    // public name: string | undefined;
    // public addres: string | undefined;
    constructor(public name: string, public addres: string) {
      // this.name = name
      // this.addres = addres
    }
  }

  bb = class Hero extends this.aa {
    constructor(public alterEgo: string, public realName: string, public age: number) {
      super(realName, 'NY')
    }
  }

  ironman = new this.aa('jorzon', 'Peru')
  batman = new this.bb("batman", "tony", 45)

  ngOnInit() {
    console.log(this.ironman, this.batman)
  }

}
