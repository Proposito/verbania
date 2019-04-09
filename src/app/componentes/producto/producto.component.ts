import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AngularFirestoreDocument } from '@angular/fire/firestore';
import { FirebaseService } from 'src/app/services/firebase.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {

  id;
  producto;
  fotos;

  constructor(private router: ActivatedRoute, private service: FirebaseService) {

    this.router.params.subscribe( params => {
      this.service.getProducto(params ['id']).subscribe((dataSnapshot) => {
       console.log(dataSnapshot.payload.id);
       this.id = dataSnapshot.payload.id;
       this.producto  = dataSnapshot.payload.data();
       console.log(this.producto);
       this.fotos = this.producto.fotos;
       console.log(this.fotos);
       } );

     });


   }

  ngOnInit() {
    window.scrollTo(0, 0);
  }

}
