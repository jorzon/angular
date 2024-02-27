import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignalLayoutComponent } from './layout/signal-layout/signal-layout.component';
import { CounterPageComponent } from './pages/counter-page/counter-page.component';
import { UserInfoPageComponent } from './pages/user-info-page/user-info-page.component';
import { PropertyPageComponent } from './pages/property-page/property-page.component';
import { ConceptPageComponent } from './pages/concept-page/concept-page.component';

const routes: Routes = [
  {
    path : '',
    component: SignalLayoutComponent,
    children: [
      {
        path: 'counter',
        component: CounterPageComponent
      },
      {
        path: 'user-info',
        component: UserInfoPageComponent
      },
      {
        path : 'properties',
        component : PropertyPageComponent
      },
      {
        path : 'concept',
        component : ConceptPageComponent
      },
      {
        path : '**',
        redirectTo: 'counter'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SignalRoutingModule { }
