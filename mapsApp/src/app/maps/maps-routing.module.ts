import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MapsLayoutComponent } from './layout/maps-layout/maps-layout.component';
import { FullScreenPageComponent } from './pages/full-screen-page/full-screen-page.component';
import { ZoomPageComponent } from './pages/zoom-page/zoom-page.component';
import { MarkerPageComponent } from './pages/marker-page/marker-page.component';
import { PropertyPageComponent } from './pages/property-page/property-page.component';
import { ConceptsComponent } from './pages/concepts/concepts.component';

const routes: Routes = [
  {
    path: '',
    component: MapsLayoutComponent,
    children: [
      {
        path: 'fullscreen',
        component: FullScreenPageComponent
      },
      {
        path: 'zoom-range',
        component: ZoomPageComponent
      },
      {
        path: 'markers',
        component: MarkerPageComponent
      },
      {
        path: 'properties',
        component: PropertyPageComponent
      },
      {
        path: 'conceptos',
        component: ConceptsComponent
      },
      {
        path: '**',
        redirectTo: 'fullscreen',

      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MapsRoutingModule { }
