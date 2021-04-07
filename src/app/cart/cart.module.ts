import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './components/cart/cart.component';
import { CartSummaryComponent } from './components/cart-summary/cart-summary.component';
import { CartListComponent } from './components/cart-list/cart-list.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { CartRoutingModule } from './cart.routing';



@NgModule({
  declarations: [
    CartComponent,
    CartSummaryComponent,
    CartListComponent,
    CheckoutComponent
  ],
  imports: [
    CommonModule,
    CartRoutingModule
  ],
  exports: [
    // temp fix until we have routing, for routes, no need to export the components
    // CartComponent
  ]
})
export class CartModule { }
