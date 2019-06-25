import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule} from '@angular/fire/storage';
import { AngularFireAuthModule} from '@angular/fire/auth';


// Services
import { FirebaseService } from './services/firebase.service';



// Rutas
import { ROUTING } from './app.routes';

// Componentes
import { AppComponent } from './app.component';


import { ProductoComponent } from './componentes/producto/producto.component';
import { CompartidoModule } from './compartido/compartido.module';

@NgModule({
  declarations: [
    AppComponent,
    ProductoComponent,

  ],
  imports: [
    BrowserModule,
    ROUTING,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireAuthModule,
    CompartidoModule

  ],
  providers: [FirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
