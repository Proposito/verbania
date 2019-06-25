import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Rutas

import { FirebaseService } from '../services/firebase.service';



// Componentes

import { NavbarComponent } from './navbar/navbar.component';
import { StoreComponent } from '../componentes/store/store.component';
import { ROUTING } from '../app.routes';
import { FooterComponent } from '../componentes/footer/footer.component';
import { HomeComponent } from '../componentes/home/home.component';

@NgModule({
  declarations: [
    NavbarComponent,
    StoreComponent,
    FooterComponent,
    HomeComponent



  ],
  imports: [
    CommonModule,
    ROUTING
  ],
  exports: [
    NavbarComponent,
    StoreComponent,
    FooterComponent,
    HomeComponent
  ],
  providers: [
    FirebaseService
  ]

})
export class CompartidoModule { }
