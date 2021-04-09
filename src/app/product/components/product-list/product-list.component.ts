// product-list.component.ts
import { Component, OnDestroy, OnInit } from '@angular/core';
import { CartItem } from 'src/app/cart/models/cart-item';
import { CartService } from 'src/app/cart/services/cart.service';
import { Product } from '../../models/product';
import { ProductService } from '../../services/product.service';

import { Store } from '@ngrx/store';
import { Favorite } from 'src/app/favorite/models/favorite';
import { addFavorite } from 'src/app/favorite/state/favorite.actions';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit, OnDestroy {
  products: Product[];

  fieldName: string;
  sortType: string;

  // to cancel rxjs subscription, abort pending api calls
  subscription: Subscription;

  constructor(private productService: ProductService, 
              private cartService: CartService,
              private store: Store<{ favorite: Favorite[] }>) { }

  ngOnInit(): void {
   this.fetchProducts();
  }

  fetchProducts() {
    this.subscription = this.productService.getProducts()
                            .subscribe( products => {
                              console.log("products", products)
                              this.products = products;
                            })
  }

  addToCart(product: Product) {
    const item: CartItem = new CartItem(product.id, 
                                        product.name, 
                                        product.price,
                                        1);

    this.cartService.addItem(item);
  }

  addToFav(product: Product) {
    const favItem = new Favorite(product.id, product.name)
    // dispatch the favorites to store
    // every dispatch shall call reducer, reducer is passed with action obect
    this.store.dispatch(addFavorite({favorite: favItem}))
  }

  deleteProduct(product_id: number) {
     this.productService.deleteProduct(product_id)
                        .subscribe( result => {
                          console.log("Product deleted succcesfully", product_id);
                          this.fetchProducts(); // get the latest products
                        })
  }
  
  ngOnDestroy() {
    // called when the component is deleted/removed
    // clean up code
    // stop timer
    // release teh apis calls, release susbcriptions
    console.log('ProductList onDestroy')

    if (this.subscription) {
      // if we have already data, this call does nothing
      // if data is not yet fetched, or in transit, it will abort the call
      // cancel pending calls
      this.subscription.unsubscribe();
    }
  }

}
