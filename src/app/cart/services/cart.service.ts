import { Injectable } from '@angular/core';

/*
Limitation of components:
  Components are not suitable for implementing business logic
  Components are UI specific
  Input/Output, are useful for immediate components with parent/child.
  Not good to call APIs from components
  If the data stored in componnet, when component destroyed, data also lost.

Services:
  1. Implement Business logic
  2. Sharing the data amoung components
  3. Mantaining the application state/data even when component destroyed
  4. Making API call
*/


@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { 
    console.log('CartService created..')
  }
}
