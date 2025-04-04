import { Component } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { CartItemComponent } from '../cart-item/cart-item.component';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-add-to-card',
  imports: [ButtonComponent, CartItemComponent, NgFor],
  templateUrl: './add-to-card.component.html',
  styleUrl: './add-to-card.component.css'
})
export class AddToCardComponent {

  cartItems = [
    { name: 'Laptop', price: 50000, quantity: 1 },
    { name: 'Phone', price: 20000, quantity: 1 }
  ];

  handleSubmit() {
    console.log('Submit button clicked!');
  }

  handleCancel() {
    console.log('Cancel button clicked!');
  }

  updateQuantity(index: number, newQuantity: number) {
    this.cartItems[index].quantity = newQuantity;
  }

  removeItem(index: number) {
    this.cartItems.splice(index, 1);
  }

}
