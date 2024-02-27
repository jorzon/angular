import { Component, signal, computed, effect, OnDestroy, OnInit } from '@angular/core';
import { User } from '../../interfaces/user-request.interface';
import { single } from 'rxjs';

@Component({
  selector: 'app-property-page',
  templateUrl: './property-page.component.html',
  styleUrls: ['./property-page.component.css']
})
export class PropertyPageComponent implements OnInit {
  ngOnInit(): void {
    setInterval(() => {
      this.counter.update(data => data + 1)
    }, 1000)
  }

  public counter = signal<number>(10)
  public fullName = computed(() => `${this.user().first_name} ${this.user().last_name}`)

  public user = signal<User>({
    "id": 4,
    "email": "eve.holt@reqres.in",
    "first_name": "Eve",
    "last_name": "Holt",
    "avatar": "https://reqres.in/img/faces/4-image.jpg"
  })

  onFieldUpdate(field: keyof User, value: string) {
    this.user.update(current => {
      switch (field) {
        case 'email':
          current.email = value
          break;
        case 'first_name':
          current.first_name = value
          break;
        case 'last_name':
          current.last_name = value
          break;
      }

      return current
    })
  }



  public userChangedEffect = effect(() => {
    console.log(`${this.user().last_name} - ${this.counter()}`)
  })


  increaseBy(value: number) {
    this.counter.update(current => current + 1)
  }

}
