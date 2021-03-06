import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart-summary',
  templateUrl: './cart-summary.component.html',
  styleUrls: ['./cart-summary.component.scss']
})
export class CartSummaryComponent implements OnInit, OnDestroy {
  totalAmount: number;
  totalQuantity: number;

  subscription1: Subscription;
  subscription2: Subscription;

  constructor(private cartService:CartService) {
    console.log('CartSummaryComponent created')

    // initialized only once first time, not updated when cart of manipulated
    //this.totalAmount = this.cartService.totalAmount;
    //this.totalQuantity = this.cartService.totalQuantity;
   }

  ngOnInit(): void {
    // while calling totalAmount$.next() in service, the subscribe callback below is called
    this.subscription1 = this.cartService.totalAmount$
                    .subscribe( n => { // is called whenver new value published
                      console.log("-- " + Math.random())
                      console.log("new total is ", n); 

                      this.totalAmount = n; // so  the UI is updated
                    })

    this.subscription2 = this.cartService.totalQuantity$
                  .subscribe( n => { // is called whenver new value published
                    console.log("new quantity is ", n); 
                    this.totalQuantity = n; // so  the UI is updated
                  })
  }

  ngOnDestroy() {
    if (this.subscription1) {
      this.subscription1.unsubscribe()
    }

    if (this.subscription2) {
      this.subscription2.unsubscribe()
    }
  }

}
