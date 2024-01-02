import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Error404PageComponent } from './pages/error404-page/error404-page.component';
import { ConceptosComponent } from './pages/conceptos/conceptos.component';



@NgModule({
  declarations: [
    Error404PageComponent,
    ConceptosComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    Error404PageComponent,
    ConceptosComponent
  ]
})
export class SharedModule { }
