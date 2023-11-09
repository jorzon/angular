import { Component } from '@angular/core';
import { Character } from '../character';
import { Newcharacter } from '../newcharacter';
import { SuperHeroe } from '../super-heroe';
import { AudioPlay } from '../audio-play';
import { Products } from '../products';
import { Taxs } from '../taxs';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css']
})
export class IntroComponent {

  //CARACTER DE TUBERIA PARA QUE LA VARIABLE PERMITE MAS DE UN TIPO DE DATO
  //***********************************TIPOS BASICOS
  name: string = 'jorzon delgado'
  hpPoints: number | string = 14
  hp: number | 'FULL' = 'FULL'
  isAlive: boolean = true
  result?: number;
  resutlt2?: string;
  operation?: number

  //**********************OBJETOS ARREGLOS INTERFACES
  skills: string[] = ['Bash', 'Counter', 'Healing']

  strider = {
    name: 'Strider',
    hp: 100,
    skill: ['bash', 'counter']
  }

  //CUANDO SE COMPILA A JS, LA INTERFACES NO GENERAN LINEAS DE CODIGO
  //INTERFAZ
  //PARA QUE UN DATO SEA OPCIONAL LE DECLARAMOS EN NUESTRA INTERFACE CON UN ?
  striderNew: Character = {
    name: 'Jorzon Superman',
    hp: 100,
    skill: ['correr', 'fuerza'],
    hometown: 'Lima'
  }


  //********************* FUNCIONES BASICAS
  //void: rno hay return en la funcion

  addNames(a: number, b: number) {
    this.result = a + b
    console.log(a + b)
  }

  addNumber = (a: number, b: number) => {
    this.resutlt2 = (a - b).toString()
    console.log(this.resutlt2)
  }

  //valor por defecto
  //dato opcional - secondNumber y base con un valor por defecto si viene vacio
  multiply(fisrNumber: number, secondNumber?: number, base: number = 2) {
    this.operation = fisrNumber * base
    console.log(this.operation)
  }


  healCharacter(personaje: Newcharacter, amount: number) {
    console.log(personaje.hp += amount)
    personaje.showHp()
  }

  strider2023: Newcharacter = {
    name: 'eljorzon',
    hp: 100,
    showHp() {
      console.log(`puntos de vida ${this.hp}`)
    },
  }

  //********************* 
  //CUANDO SE TRABAJA CON UNA INTERFACE  CON UN OBJETO DENTRO, TE RECOMIENDA QUE TENGA SU INTERFACE INDEPENDIENTE
  superHeroe: SuperHeroe = {
    name: 'Spiderman',
    age: 30,
    address: {
      calle: 'Main St',
      pais: 'USA',
      ciudad: 'NY'
    },
    showAddress() {
      console.log(this.name + ', ' + this.address.ciudad + ', ' + this.address.pais)
    }
  }

  //********************* 
  //DESTRUCTURACION DE OBJETO
  audioPlayer: AudioPlay = {
    audioName: 90,
    songDUration: 36,
    song: 'Mess',
    detail: {
      author: 'Edd Sheeran',
      year: 2015
    }
  }


  //EJEMPLO
  // { audioName, song, songDuration: duration, detail } = audioPlayer
  // { author, year } = detail


  //********************* 
  //DESTRUCTURACION DE ARREGLOS
  dbz: string[] = ['goku', 'vegeta', 'trunk']

  // [p1,p2,p3 = 'Not found']: string[] = ['goku', 'vegeta', 'trunk']
  // [p1,p2,p3 = 'Not found']: string[] = dbz


  //********************* 
  //DESTRUCTURACION DE ARGUMENTOS
  phone: Products = {
    description: 'Nokia A1',
    price: 150.00
  }

  tablet: Products = {
    description: 'Ipad Air',
    price: 250.00
  }

  shoppingCart: Products[] = [this.phone, this.tablet]
  tax: number = 0.15


  //CUANDO
  //taxCalculation({ tax, products }: Taxs): [number, number] {
  taxCalculation(options: Taxs): [number, number] {
    const { tax, products } = options
    let total: number = 0
    products.forEach(({ price }) => {
      total += price
    })

    return [total, total * tax]
  }

  //PENDIENTE
  resultado = this.taxCalculation({
    tax: this.tax,
    products: this.shoppingCart
  })


  //IMPORTACIONES Y EXPORTACIONES
  shopping: Products[] = [
    {
      description: 'Nokia',
      price: 100
    },
    {
      description: 'Air',
      price: 50
    }
  ]

  nuevo = this.taxCalculation({
    tax: 0.28,
    products: this.shopping
  })

  ngOnInit() {
    console.log(this.name)
    console.log(this.hpPoints)
    console.log(this.hp)
    console.log(this.isAlive)
    console.log("------------------------")
    console.log(this.striderNew)
    console.log("------------------------")
    this.addNames(12, 15)
    this.addNumber(2023, 1994)
    this.multiply(10)
    this.healCharacter(this.strider2023, 11)
    console.log(this.superHeroe)
    this.superHeroe.showAddress()
    console.log("------------------------")
    console.log(this.audioPlayer)
    console.error('personaje 3:', this.dbz[2] || 'Personaje no encontrado')
    console.log(this.resultado)
    console.log(this.shopping)
    console.log(this.nuevo)
  }

}
