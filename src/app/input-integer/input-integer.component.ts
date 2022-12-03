import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from '../product-list/Product';

@Component({
  selector: 'app-input-integer',
  templateUrl: './input-integer.component.html',
  styleUrls: ['./input-integer.component.scss']
})
export class InputIntegerComponent implements OnInit {

  constructor() { }

  maxReached: boolean = false;
  minReached: boolean = false;

  @Input() quantity!: number;
  @Input() max!: number;

  @Output() quantityChange: EventEmitter<number> = new EventEmitter<number>();

  ngOnInit(): void {
  }

  upQuantity(): void{
    if (this.quantity < this.max) {
      this.quantity++;
      this.minReached = false;
      this.quantityChange.emit(this.quantity);
    }
    if (this.quantity == this.max) { this.maxReached = true; this.minReached = false } else { this.maxReached = false };
  }

  downQuantity(): void{
    if (this.quantity > 0) {
      this.quantity--;
      this.maxReached = false;
      this.quantityChange.emit(this.quantity);
    }
    if (this.quantity == 0) { this.minReached = true; this.maxReached = false } else { this.minReached = false }
  }

  changeQuantity(event: any): void{
    event.preventDefault();
    console.log(event.target.value);
    if (event.key.match(/^[0-9]+$/) && event.target.value <= this.max) {
      this.quantity = event.target.value;
      this.quantityChange.emit(this.quantity);  
    }
  }
}
