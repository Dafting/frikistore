import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CartService } from '../cart.service';
import { Product } from '../product-list/Product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  cartList$: Observable<Product[]>; 

  constructor(private cartService: CartService) { 
    this.cartList$ = cartService.cartList.asObservable();
  }
  
  addToCart(beer: any): void {
    this.cartService.addToCart(beer);
  }
  
  ngOnInit(): void {
  }

}
