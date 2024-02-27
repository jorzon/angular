import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SignalRoutingModule } from './signal-routing.module';
import { SignalLayoutComponent } from './layout/signal-layout/signal-layout.component';
import { CounterPageComponent } from './pages/counter-page/counter-page.component';
import { UserInfoPageComponent } from './pages/user-info-page/user-info-page.component';
import { PropertyPageComponent } from './pages/property-page/property-page.component';
import { SideMneuComponent } from './components/side-mneu/side-mneu.component';
import { ConceptPageComponent } from './pages/concept-page/concept-page.component';


@NgModule({
  declarations: [
    SignalLayoutComponent,
    CounterPageComponent,
    UserInfoPageComponent,
    PropertyPageComponent,
    SideMneuComponent,
    ConceptPageComponent
  ],
  imports: [
    CommonModule,
    SignalRoutingModule
  ]
})
export class SignalModule { }
