import { TestBed} from '@angular/core/testing';

import { ProductService } from './product.service';

import {HttpClientTestingModule, // provides fake http client, that never request to real api server
       HttpTestingController } from '@angular/common/http/testing';
import { Product } from '../models/product';

 
fdescribe('ProductService', () => {
  let service: ProductService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    // injected with fake http client, not the real HttpClient
    service = TestBed.inject(ProductService);
    httpMock = TestBed.get(HttpTestingController);
  });

  it('should be created', (done) => {
    expect(service).toBeTruthy();

    service.getProduct(2)
           .subscribe( product => {
             expect(product.id).toBe(2)
             expect(product).toEqual({id: 2, name :'p2', price: 1000, brandId: 1} as Product)
             done();
           })

    // now respond to API call in mock controller
    let productRequest = httpMock.expectOne('http://localhost:7070/api/products/2')
    // now respond to browser/client with result
    // flush will ensure that it will call subscribe
    productRequest.flush({id: 2, name :'p2', price: 1000, brandId: 1}) // response from server as mocked
    httpMock.verify(); // validate whether call is really made or not
    
  });
});
