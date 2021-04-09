import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { CartItem } from '../../models/cart-item';
import { CartService } from '../../services/cart.service';

// OnPush: angular will do dirty change on below
  // whenever input props change
  // or when we explicitly request change detection
  // whenever inside component event

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CartListComponent implements OnInit {

  items: CartItem[] = [];

  @Input()
  totalAmount: number;

  constructor(private cartService:CartService, 
              private changeDetectorRef: ChangeDetectorRef) {
    console.log('CartListComponent created')

    // this.items = this.cartService.cartItems;
   }

  ngOnInit(): void {
    this.cartService.cartItems$.subscribe(items => { 
      console.log("CartItem subscription")
      this.items = items;
      // request angular to detect change for this component
      this.changeDetectorRef.detectChanges();
    })
  }

  getTotal(cartItem: CartItem) {
    console.log('getTotal called ', cartItem)
    
    return cartItem.price * cartItem.qty;
  }

  // any event in the same component, will do dirty check for onPush strategy
  test() {
    console.log("Test");
  }
}
