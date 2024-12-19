import { Routes } from '@angular/router';
import { CartComponent } from './components/cart/cart.component';
import { CartAppComponent } from './components/cart-app.component';
import { CatalogComponent } from './components/catalog/catalog.component';

export const routes: Routes = [

    {path: '', redirectTo:'/catalog', pathMatch:'full'},
    {path: 'cart',component: CartComponent},
    {path:'catalog', component:CatalogComponent}
];
