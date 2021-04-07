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
}
