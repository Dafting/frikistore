import { provideCloudinaryLoader } from '@angular/common';
import { Injectable } from '@angular/core';
import { Product } from './product-list/Product';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private _cartList: Product[] = [];

  cartList: BehaviorSubject<Product[]> = new BehaviorSubject<Product[]>([]);

  constructor() { }

  addToCart(product: Product) {
    let item: Product | undefined = this._cartList.find((v1) => v1.name == product.name);
    if (!item) {
      this._cartList.push({...product});
    }
    else {
      item.quantity = item.quantity + product.quantity;
    }
    this.cartList.next(this._cartList);
  }
}
