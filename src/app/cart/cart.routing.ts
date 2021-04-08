// cart.routing.ts

import {NgModule} from '@angular/core';

import {RouterModule, Routes} from '@angular/router';
import { AuthGuard } from '../auth/guards/auth.guard';
import { CartComponent } from './components/cart/cart.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
 
const routes: Routes = [
    {
        // hosted inside app.component.html
        path: 'cart',
        component: CartComponent,
    },
    {
         // hosted inside app.component.html
        path: 'checkout',
        component: CheckoutComponent,
        canActivate: [AuthGuard]
    }
]

@NgModule({
    imports: [
        // lazy loaded/sub module, forChild has fewer services
        RouterModule.forChild(routes)
    ],
    exports: [
        // component, directives, pipes
        // Modules, all the component, directives, pipes exported in module are re-exported
        RouterModule
    ]
})
export class CartRoutingModule {

}