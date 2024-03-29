import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-counter-page',
  templateUrl: './counter-page.component.html',
  styleUrls: ['./counter-page.component.css']
})
export class CounterPageComponent {
  public counter = signal<number>(10)

  //SOLO LECTURA
  public squareCounter = computed(() => this.counter() * this.counter())

  increaseBy(value: number) {
    this.counter.update(current => current + value)
  }
}
