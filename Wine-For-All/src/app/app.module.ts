import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { AllTimeLoadedComponent } from './all-time-loaded/all-time-loaded.component';
import { HomeComponent } from './home/home.component';
import { ProduitComponent } from './produit/produit.component';
import { Detail1Component } from './produit/detail1/detail1.component';
import { Detail2Component } from './produit/detail2/detail2.component';
import { Detail3Component } from './produit/detail3/detail3.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    AllTimeLoadedComponent,
    HomeComponent,
    ProduitComponent,
    Detail1Component,
    Detail2Component,
    Detail3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
