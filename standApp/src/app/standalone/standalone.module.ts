import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StandaloneRoutingModule } from './standalone-routing.module';
import { ConceptComponent } from './pages/concept/concept.component';
import { CounterAloneComponent } from "./alone/components/counter-alone/counter-alone.component";


@NgModule({
    declarations: [
        ConceptComponent
    ],
    imports: [
        CommonModule,
        StandaloneRoutingModule,
        CounterAloneComponent
    ]
})
export class StandaloneModule { }
