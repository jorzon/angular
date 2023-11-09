//angular
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//modulos
import { CounterModule } from './counter/counter.module';
import { AppRoutingModule } from './app-routing.module';
import { HeroesModule } from './heroes/heroes.module';

//componentes
import { AppComponent } from './app.component';




@NgModule({
  declarations: [
    AppComponent
  ],
  //LOS MODULOS SIEMPRE VAN EN LOS IMPORTS
  imports: [
    BrowserModule,
    AppRoutingModule,
    CounterModule,
    HeroesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
