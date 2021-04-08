// product-edit.component.ts
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../../models/product';
import { ProductService } from '../../services/product.service';

import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss']
})
export class ProductEditComponent implements OnInit {

  // read the id passed on the url param /products/edit/:id [ActivatedRoute]
  // navigate from one page to another page, back, forward, [Router]

  // to get the template reference variable into component
  // ElementRef is a wrapper for the REAL DOM object
  @ViewChild("productNameInput", {static: true})
  productNameInput: ElementRef;

  @ViewChild("productForm", {static: true})
  productForm: NgForm;

  product: Product = new Product(); // to create new product

  constructor(private route: ActivatedRoute, 
              private router: Router,
              private productService: ProductService) { }

  ngOnInit(): void {
    // nativeElement is the actual DOM (input), elementRef is a wrapper
    this.productNameInput.nativeElement.focus(); // focus is html input method to set cursor


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

    if (this.productForm.pristine) {
      alert('no changes found');
      return;
    }

    this.productService.saveProduct(this.product)
                       .subscribe( savedProduct => {
                          console.log('product saved ', savedProduct)
                          this.product = savedProduct;
                       })
  }

}
