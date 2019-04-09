import { Routes, RouterModule } from '@angular/router';


import { HomeComponent } from './componentes/home/home.component';
import { StoreComponent } from './componentes/store/store.component';
import { ProductoComponent } from './componentes/producto/producto.component';






const ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'store', component: StoreComponent },
    { path: 'producto/:id', component: ProductoComponent },


    { path: '**', component: HomeComponent },

];


export const ROUTING = RouterModule.forRoot(ROUTES, {useHash: true});
