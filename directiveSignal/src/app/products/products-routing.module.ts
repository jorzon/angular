import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductPageComponent } from './pages/product-page/product-page.component';
import { ConceptPageComponent } from './pages/concept-page/concept-page.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'product',
        component: ProductPageComponent
      },
      {
        path: 'concept',
        component: ConceptPageComponent
      },
      {
        path: '**',
        redirectTo: 'product'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
