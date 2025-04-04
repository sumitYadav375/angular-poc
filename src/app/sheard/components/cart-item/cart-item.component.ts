import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-cart-item',
  imports: [],
  templateUrl: './cart-item.component.html',
  styleUrl: './cart-item.component.css'
})
export class CartItemComponent {
@Input() name!: string;
@Input() price!: number;
@Input() quantity: number = 1;


@Output() quantityChange = new EventEmitter<number>();
@Output() deleteItem = new EventEmitter<void>();

get total() {
  return this.price  * this.quantity;
}

increaseQty() {
  this.quantity++;
  this.quantityChange.emit(this.quantity)
}

decreaseQty() {
  if(this.quantity > 1) {
    this.quantity--;
    this.quantityChange.emit(this.quantity)
  }
}

removeItem() {
  this.deleteItem.emit();
}

}
