// product-list.component.ts
import { Component, OnInit } from '@angular/core';
import { CartItem } from 'src/app/cart/models/cart-item';
import { CartService } from 'src/app/cart/services/cart.service';
import { Product } from '../../models/product';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  products: Product[];

  fieldName: string;
  sortType: string;

  constructor(private productService: ProductService, 
              private cartService: CartService) { }

  ngOnInit(): void {
   this.fetchProducts();
  }

  fetchProducts() {
    this.productService.getProducts()
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

  deleteProduct(product_id: number) {
     this.productService.deleteProduct(product_id)
                        .subscribe( result => {
                          console.log("Product deleted succcesfully", product_id);
                          this.fetchProducts(); // get the latest products
                        })
  }

}
