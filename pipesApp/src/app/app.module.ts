import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from "./shared/shared.module";

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


//CONFIGURACION DEL LOCALE DE LA APP
import localEsPE from '@angular/common/locales/es-PE'
import localFrCA from '@angular/common/locales/fr-CA'
import {registerLocaleData} from '@angular/common'

registerLocaleData(localEsPE)
registerLocaleData(localFrCA)

@NgModule({
    declarations: [
        AppComponent
    ],
    providers: [
        {
            provide: LOCALE_ID , useValue: 'es-PE'
        }
    ],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        SharedModule,
        BrowserAnimationsModule
    ]
})
export class AppModule { }
