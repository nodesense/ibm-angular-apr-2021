import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  // we are injecting instance of cartService into cart component
  constructor(private cartService:CartService) { 
    console.log('CartComponent created')
  }

  ngOnInit(): void {
  }

}
