import { Injectable } from '@angular/core';
import { CartItem } from '../models/cart-item';

import {Subject, BehaviorSubject} from 'rxjs';


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

  private cartItems: CartItem[] = []; // ref type
  private totalQuantity: number = 0; // value type
  private totalAmount: number = 0;

  // Subject publish the value only when called .next method
  //totalAmount$: Subject<number> = new Subject<number>();
  //totalQuantity$: Subject<number> = new Subject<number>();

  // behavioursubject holds initial value, or last known value in memory
  // whenever a consumer subscribe, behaviour subject immediately provide last known value
  // it won't wait for .next/publish to be called to call subscribe
  totalAmount$: BehaviorSubject<number> = new BehaviorSubject<number>(this.totalAmount);
  totalQuantity$: BehaviorSubject<number> = new BehaviorSubject<number>(this.totalQuantity);
  cartItems$: BehaviorSubject<CartItem[]> = new BehaviorSubject<CartItem[]>(this.cartItems);

  constructor() { 
    console.log('CartService created..')
  }


  get amount(): number {
    return this.totalAmount;
  }

  set amount(value: number) {
    if (value >= 0) {
      this.totalAmount = value; // mutation of totalAmount
       //  publish the value here
      this.totalAmount$.next(this.totalAmount);
    }
    // else you may throw error
  }

  get quantity(): number {
    return this.totalQuantity
  }

  set quantity(value: number) {
    if (value >=0 ){
      this.totalQuantity = value;
      this.totalQuantity$.next(this.totalQuantity);
    }
  }

  get items(): CartItem[] {
    return this.cartItems;
  }

  set items(value: CartItem[]) {
    this.cartItems = value;
    this.cartItems$.next(this.cartItems);
  }

  calculate() {
    let amt = 0, qty = 0;
    for (let item of this.cartItems) {
      amt += item.price * item.qty;
      qty += item.qty;
    }

    this.amount = amt; // this calls the setter for amount, assign totalAmount, publish the totalAmount
    this.quantity = qty;

    //this.totalAmount = amt;
    //this.totalQuantity = qty;

    console.log("Amount ", this.totalAmount);
    console.log("qty ", this.totalQuantity);

    // publish the value for totalAmount
    // since we use behaviour subject, published value in .next is stored as last known value in behaviour subject
    
    // this.totalAmount$.next(this.totalAmount);
    //this.totalQuantity$.next(this.totalQuantity);
  }

  addItem(item: CartItem) {
    //this.cartItems.push(item); // mutable, modifing existing array
    //this.items = this.cartItems; 
    const cartItems = [...this.cartItems, item] // immutable 
    this.items =  cartItems; // calling setter, publishing the values too
    
    this.calculate();
  }

  empty() {
    //FIXME
    this.cartItems = []; // immutable, create and assign new object
    // this.cartItems.splice(0, this.cartItems.length); // mutable

    // FIXME: show demo of mutable, immutable array
    this.items = this.cartItems; 

    this.calculate();
  }
}
