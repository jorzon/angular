import { Component } from '@angular/core';
import { Passenger } from '../passenger';

@Component({
  selector: 'app-encadenamiento-opcional',
  templateUrl: './encadenamiento-opcional.component.html',
  styleUrls: ['./encadenamiento-opcional.component.css']
})
export class EncadenamientoOpcionalComponent {

  passenger1: Passenger = {
    name: 'Jorzon Delgado',

  }


  passenger2: Passenger = {
    name: 'Sandra Delgado',
    children: ['Natalia', 'Melissa']
  }


  // || si no -- ENCADENAMIENTO OPCIONAL

  printChildren = (passenger: Passenger): number => {
    const howManyChildren = passenger.children?.length || 0
    // ! NEGACION - non-null assertion operator , es una forma de decir que nunca vas a recibir un nulo
    // const howManyChildren = passenger.children!.length
    console.log(passenger.name + " tiene " + howManyChildren + " hijos")
    return howManyChildren
  }

  ngOnInit() {
    console.log(this.passenger1, this.passenger2)
    this.printChildren(this.passenger2)
    this.printChildren(this.passenger1)
  }
}
