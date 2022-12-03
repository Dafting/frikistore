import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Product } from './product-list/Product';

const URL = 'https://635ef5f403d2d4d47af90c87.mockapi.io/productList';

@Injectable({
  providedIn: 'root'
})
export class ProductDataService {
  constructor(private http: HttpClient) { }

  public getAll() : Observable<Product[]>{
    return this.http.get<Product[]>(URL)
            .pipe(
              tap((productos: Product[]) => productos.forEach(producto => producto.quantity = 0)),
              tap((productos: Product[]) => console.log(productos))
            );
  }
}
