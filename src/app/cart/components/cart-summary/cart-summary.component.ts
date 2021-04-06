import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart-summary',
  templateUrl: './cart-summary.component.html',
  styleUrls: ['./cart-summary.component.scss']
})
export class CartSummaryComponent implements OnInit {
  totalAmount: number = 0;

  constructor(private cartService:CartService) {
    console.log('CartSummaryComponent created')

    // initialized only once first time, not updated when cart of manipulated
    this.totalAmount = this.cartService.totalAmount;
   }

  ngOnInit(): void {
    this.cartService.totalAmount$
                    .subscribe( n => { // is called whenver new value published
                      console.log("new total is ", n); 
                      this.totalAmount = n; // so  the UI is updated
                    })
  }

}
