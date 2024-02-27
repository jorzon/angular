import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{
  path: 'product',
  loadChildren: () => import('./products/products.module').then(m => m.ProductsModule)
},
{
  path: 'signal',
  loadChildren: () => import('./signal/signal.module').then(m => m.SignalModule)
},
{
  path: '**',
  redirectTo: 'signal'
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
