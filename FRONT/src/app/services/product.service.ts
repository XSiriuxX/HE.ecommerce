import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Product } from '../models/product.model';
import { Observable, tap } from 'rxjs';
import { JwtResponse } from '../models/jwt-response';

@Injectable()
export class ProductService {
  API_URL: string = `${environment.API_URL}/product`;

  constructor(private http: HttpClient) {}

  getAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.API_URL}`).pipe(
      tap((res) => {
        return res;
      })
    );
  }
}
