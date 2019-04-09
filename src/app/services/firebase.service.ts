import { Injectable } from '@angular/core';
import { AngularFirestore} from '@angular/fire/firestore';
import { Observable, TimeoutError, Timestamp } from 'rxjs';




@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

 productos =  [];
  constructor( private db: AngularFirestore) {


   }

   public getProductos() {
    return this.db.collection('productos').snapshotChanges();
  }


  public getProducto( documentKey )  {

    return this.db.collection('productos').doc(`${documentKey}`).snapshotChanges();


  }


  public getUsuarios() {
    return this.db.collection('usuarios').snapshotChanges();
  }


  public nuevoPresu(documentId, data: {nombre, apellido, mail, destino, asunto,
    mensaje, tipoBarco, pasajeros, telefono, checkIn, checkOut: Date, }) {
    return this.db.collection('presupuestos').add(data);
   }


   public nuevaReserva(documentId, data: {nombre, apellido, mail, barco,
    mensaje, pasajeros, telefono, checkIn: Date, checkOut: Date, }) {
      return this.db.collection('reservas').add(data);
     }



}
