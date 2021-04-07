import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/cart/services/cart.service';

import {Observable} from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  today = new Date();
  totalAmount$: Observable<number>;
  totalQuantity$: Observable<number>;

  constructor(private cartService: CartService) {
    console.log('HeaderComponent created')
    this.totalAmount$ = this.cartService.totalAmount$;
    this.totalQuantity$ = this.cartService.totalQuantity$;
   }

  ngOnInit(): void {
  }

}
