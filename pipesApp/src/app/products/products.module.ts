import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { BasicPageComponent } from './pages/basic-page/basic-page.component';
import { NumberPageComponent } from './pages/number-page/number-page.component';
import { CommonPageComponent } from './pages/common-page/common-page.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { OrderComponent } from './pages/order/order.component';
import { ToggleCasePipe } from './pages/pipes/toggle-case.pipe';
import { canFlyPipe } from './pages/pipes/can-fly.pipe';
import { SortByPipe } from './pages/pipes/sort-by.pipe';


@NgModule({
  declarations: [
    BasicPageComponent,
    NumberPageComponent,
    CommonPageComponent,
    OrderComponent,

    //pipes
    ToggleCasePipe,
    canFlyPipe,
    SortByPipe
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    PrimeNgModule
  ]
})
export class ProductsModule { }
