import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConceptComponent } from './pages/concept/concept.component';

const routes: Routes = [{
  path: '',
  component: ConceptComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StandaloneRoutingModule { }
