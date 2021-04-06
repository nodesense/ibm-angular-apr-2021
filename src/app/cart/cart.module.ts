import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './components/cart/cart.component';
import { CartSummaryComponent } from './components/cart-summary/cart-summary.component';
import { CartListComponent } from './components/cart-list/cart-list.component';
import { CheckoutComponent } from './components/checkout/checkout.component';



@NgModule({
  declarations: [
    CartComponent,
    CartSummaryComponent,
    CartListComponent,
    CheckoutComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    // temp fix until we have routing
    CartComponent
  ]
})
export class CartModule { }
