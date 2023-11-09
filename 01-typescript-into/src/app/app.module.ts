import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IntroComponent } from './intro/intro.component';
import { ClasesComponent } from './clases/clases.component';
import { GenericosComponent } from './genericos/genericos.component';
import { DecoradoresComponent } from './decoradores/decoradores.component';
import { EncadenamientoOpcionalComponent } from './encadenamiento-opcional/encadenamiento-opcional.component';

@NgModule({
  declarations: [
    AppComponent,
    IntroComponent,
    ClasesComponent,
    GenericosComponent,
    DecoradoresComponent,
    EncadenamientoOpcionalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
