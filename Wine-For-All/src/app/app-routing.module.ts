import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { AppComponent } from './app.component';
import { AllTimeLoadedComponent } from './all-time-loaded/all-time-loaded.component';
import { HomeComponent } from './home/home.component';
import { ProduitComponent } from './produit/produit.component';

const routes: Routes = [
  {
    path: '', component:AllTimeLoadedComponent,
  },
  {
    path: 'produit', component:ProduitComponent,
  },
  {
    path: 'home', component:HomeComponent,
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
