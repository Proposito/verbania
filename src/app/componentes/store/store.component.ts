import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/services/firebase.service';
import { Router } from '@angular/router';
import { when } from 'q';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {

  filterPost = '';
  productos = [];


  constructor(private db: FirebaseService,
              private router: Router) { 


                this.db.getProductos().subscribe((barcosSnapshot) => {
                  this.productos = [];
                  barcosSnapshot.forEach((barcoData: any) => {
                    this.productos.push({
                      id: barcoData.payload.doc.id,
                      data: barcoData.payload.doc.data()
                    });
                    console.log(this.productos);
            
            
            
                  });
                });
                
              }

  ngOnInit() {

    window.scrollTo(0, 0);



 




  }

}

