import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, FormControl, Validators, AbstractControl, ValidatorFn} from '@angular/forms';

import { Product } from '../../models/product';
import { ProductService } from '../../services/product.service';

import {map, filter, debounceTime} from 'rxjs/operators';

// custom validator
function banWords(): ValidatorFn {
  // return a validator function
  // returning an object means there is error
  // returning null means, no error in the form
  return (control: AbstractControl): { [key: string]: any} | null => {
    const value = control.value?.toLowerCase()
    if (value.indexOf("terror") >= 0) {
      // invalid entry, return any object with key value
      return {
        "bannedWords": true
      }
    } else {
      // valid entry
      return null; // no error
    }
  }
}


@Component({
  selector: 'app-product-search',
  templateUrl: './product-search.component.html',
  styleUrls: ['./product-search.component.scss']
})
export class ProductSearchComponent implements OnInit {
  products: Product[] = [];

  form: FormGroup;
  searchControl: FormControl;
  searchText: string = ''; // for data binding using reactive form, after cleaning

  constructor(private formBuilder: FormBuilder, 
              private productService: ProductService) {
      this.searchControl = new FormControl("", [Validators.required, 
                                                Validators.minLength(2), 
                                                Validators.maxLength(20),
                                                banWords()
                                              ] ); // default value for control
      // form group of controls
      this.form = formBuilder.group({
        "searchControl": this.searchControl
      });
  }

  ngOnInit(): void {
    this.searchControl.valueChanges
                       .pipe ( map((value: string) => value.trim().toLowerCase()))
                       .pipe ( filter ( (value: string) => !!value)) // if value is empty string, it does't call subscribe
                       .pipe ( debounceTime (500)) // range from 300 ms to 600 ms
                       .subscribe( value => {
                         console.log("***"+value+"***");

                         this.searchText = value; // we assign cleaned data to model
                         this.productService.searchProducts(this.searchText)
                         .subscribe( (results: any[]) => {
                             this.products = results;
                         })
                         

                       })
  }

}
