import { Component, OnInit } from '@angular/core';
import { Product } from './Product';
import { CartService } from '../cart.service';
import { ProductDataService } from '../product-data.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})

export class ProductListComponent implements OnInit {
  maxReached: boolean = false;
  minReached: boolean = false;

  productos: Product[] = [];

  constructor(
    private cartService: CartService,
    private productDataService: ProductDataService,
  ) { } 

  addToCart(product: any): void {
    if (product.quantity != 0) {
      this.cartService.addToCart(product);
      
      product.stock -= product.quantity;
      product.quantity = 0;
    }
  }

  ngOnInit(): void {
    this.productDataService.getAll().subscribe(productos => this.productos = productos);
  }
}