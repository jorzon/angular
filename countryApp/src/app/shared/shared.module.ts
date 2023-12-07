import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";


import { AboutPageComponent } from './pages/about-page/about-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { ConceptosComponent } from './pages/conceptos/conceptos.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';





@NgModule({
  declarations: [
    AboutPageComponent,
    ConceptosComponent,
    ContactPageComponent,
    HomePageComponent,
    SearchBoxComponent,
    SideBarComponent,
    
    
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    AboutPageComponent,
    ConceptosComponent,
    ContactPageComponent,
    HomePageComponent,
    SearchBoxComponent,
    SideBarComponent
  ]
})
export class SharedModule { }
