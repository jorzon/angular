import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path : 'concept',
    loadChildren: () => import('./standalone/standalone.module').then(m => m.StandaloneModule)
  },
  {
    path : 'alone',
    //CARGA PEREZOSA
    loadComponent: () => import ('./standalone/alone/pages/alone-page/alone-page.component').then(m => m.AlonePageComponent)
  },
  {
    path: '**',
    redirectTo : 'concept'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
