import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './components/menu/menu.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { ConceptosComponent } from './pages/conceptos/conceptos.component';



@NgModule({
  declarations: [
    MenuComponent,
    ConceptosComponent
  ],
  imports: [
    CommonModule,
    PrimeNgModule
  ],
  exports: [
    MenuComponent,
    ConceptosComponent
  ]
})
export class SharedModule { }
