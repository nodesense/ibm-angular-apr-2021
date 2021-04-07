// product.service.ts
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  // injecting a service into another service
  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]> {
    // GET /api/products
    return this.http.get<Product[]>(`${environment.apiEndPoint}/api/products`)
  }

  // GET /api/products/16
  getProduct(id: number): Observable<Product> {
    // GET /api/products/16
    return this.http.get<Product>(`${environment.apiEndPoint}/api/products/${id}`)
  }

  // PUT /api/products/16
  // payload data

  //return saved product data for 16
  updateProduct(product: Product): Observable<Product> {
    return this.http.put<Product>(`${environment.apiEndPoint}/api/products/${product.id}`, product)
  }

  // create new product in backend
  // POST /api/products
  // payload data

  // return saved product data with id
  createProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(`${environment.apiEndPoint}/api/products`, product)
  }

  saveProduct(product: Product): Observable<Product> {
    if (product.id) {
      return this.updateProduct(product);
    } else {
      return this.createProduct(product);
    }
  }

  // Delete a product
  // DELETE /api/products/16

  deleteProduct(id: number): Observable<any> {
    // GET /api/products/16
    // returns 200 OK, means, product deleted
    return this.http.delete<any>(`${environment.apiEndPoint}/api/products/${id}`)
  }
}
