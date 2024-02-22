import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ProductsRoutingModule } from './products-routing.module';
import { ProductPageComponent } from './pages/product-page/product-page.component';
import { ConceptPageComponent } from './pages/concept-page/concept-page.component';
import { SharedModule } from '../shared/shared.module';
import { CounterComponent } from './pages/counter/counter.component';



@NgModule({
  declarations: [
    ProductPageComponent,
    ConceptPageComponent,
    CounterComponent,
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class ProductsModule { }
