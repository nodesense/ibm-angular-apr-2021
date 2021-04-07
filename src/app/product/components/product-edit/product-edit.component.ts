// product-edit.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../../models/product';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss']
})
export class ProductEditComponent implements OnInit {

  // read the id passed on the url param /products/edit/:id [ActivatedRoute]
  // navigate from one page to another page, back, forward, [Router]

  product: Product = new Product(); // to create new product

  constructor(private route: ActivatedRoute, 
              private router: Router,
              private productService: ProductService) { }

  ngOnInit(): void {
    // to read id from url
    const id = this.route.snapshot.params['id'];
    if (id) {
      console.log('edit product', id)
      this.productService.getProduct(id)
                         .subscribe(product => {
                           console.log('got product data', product)
                           this.product = product; // came from api service
                         })
    } else {
      console.log('create a new product')
    }
  }

  saveProduct() {
    this.productService.saveProduct(this.product)
                       .subscribe( savedProduct => {
                          console.log('product saved ', savedProduct)
                          this.product = savedProduct;
                       })
  }

}
