import { Injectable } from '@angular/core';
import { CartItem } from '../models/cart-item';

import {Subject} from 'rxjs';


/*
Limitation of components:
  Components are not suitable for implementing business logic
  Components are UI specific
  Input/Output, are useful for immediate components with parent/child.
  Not good to call APIs from components
  If the data stored in componnet, when component destroyed, data also lost.

Services:
  1. Implement Business logic
  2. Sharing the data amoung components
  3. Mantaining the application state/data even when component destroyed
  4. Making API call
*/


@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartItems: CartItem[] = []; // ref type
  totalQuantity: number = 0; // value type
  totalAmount: number = 0;

  totalAmount$: Subject<number> = new Subject<number>();

  constructor() { 
    console.log('CartService created..')
  }

  calculate() {
    let amt = 0, qty = 0;
    for (let item of this.cartItems) {
      amt += item.price * item.qty;
      qty += item.qty;
    }

    this.totalAmount = amt;
    this.totalQuantity = qty;

    console.log("Amount ", this.totalAmount);
    console.log("qty ", this.totalQuantity);

    // publish the value for totalAmount
    this.totalAmount$.next(this.totalAmount);
  }

  addItem(item: CartItem) {
    this.cartItems.push(item)
    this.calculate();
  }

  empty() {
    //FIXME
    // this.cartItems = []; // immutable
    this.cartItems.splice(0, this.cartItems.length); // mutable
    this.calculate();
  }
}
