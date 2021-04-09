import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CartItem } from '../../models/cart-item';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  totalAmount$:Observable<number>;
  
  // we are injecting instance of cartService into cart component
  constructor(private cartService:CartService) { 
    console.log('CartComponent created')
    this.totalAmount$ = this.cartService.totalAmount$;
  }

  ngOnInit(): void {
  }

  addItem() {
    const id = Math.ceil(Math.random() * 1000000);
    const item = new CartItem(id, 
                              `Product ${id}`, 
                              Math.ceil(Math.random() * 100),
                              1);

    this.cartService.addItem(item);
  }

  empty () {
    this.cartService.empty();
  }

}
