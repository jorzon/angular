import { Component } from '@angular/core';
import { interval , tap } from 'rxjs';

@Component({
  selector: 'app-common-page',
  templateUrl: './common-page.component.html',
  styleUrls: ['./common-page.component.css']
})
export class CommonPageComponent {
  //I18nSelect
  public name: string = 'Jorzon'
  public gender: 'male' | 'female' = 'male'


  public invitationMap = {
    male: 'invitarlo',
    female: 'invitarla'
  }

  changeClient(): void {
    this.name = 'Melisa'
    this.gender = 'female'
  }


  //i18nPlural

  public clients: string[] = ['jorzon', 'eduardo', 'melissa', 'natalia', 'maria']
  public clientMap = {
    '=0': 'no tenemos ningún cliente esperando',
    '=1': 'tenemos 1 cliente esperando',
    'other': 'tenemos # clientes esperando'
  }

  deleteClient() {
    this.clients.shift()
  }

  //KEYVALUEPIPE  
  public person = {
    name: 'Jorzon',
    age: 29,
    address: 'Lima - Perú'
  }

  //async pipes
  public myObservableTimer = interval(2000)
  .pipe(tap(value => console.log(value))
  )


  public promiseValue = new Promise<string>((resolve, reject) => {
    setTimeout(() => {
      resolve('Tenemos data de la promesa')
    }, 3500);
  })
}