import { Component, inject } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { CartItemComponent } from '../cart-item/cart-item.component';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IProduct } from '../../../model/products.model';
import { selectAddToCard } from '../../../store/addToCard/addToCard.selector';
import { removeCartItem, setCartTotals, updateCartItemQuantity } from '../../../store/addToCard/addToCard.action';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-add-to-card',
  standalone: true, 
  imports: [FormsModule, CommonModule, ButtonComponent, CartItemComponent, NgFor, NgIf, RouterModule],
  templateUrl: './add-to-card.component.html',
  styleUrl: './add-to-card.component.css'
})
export class AddToCardComponent  {
  private store = inject(Store)
  vatPercentage: number = 0; // Or default value like 5 for 5%
  discountAmount: number = 0;
  cardItems$: Observable<IProduct[]> = this.store.select(selectAddToCard);
  constructor(private router: Router) {}
  
  handleSubmit() {
    this.cardItems$.subscribe(items => {
      const subTotal = this.getSubTotal(items);
      const vat = this.vatPercentage;
      const discount = isNaN(this.discountAmount) ? 0 : this.discountAmount;
      const total = subTotal + this.getVATAmount(subTotal) -  this.getDiscountAmount(subTotal, discount);
  
      this.store.dispatch(setCartTotals({
        subTotal,
        vat,
        discount,
        total
      }));
  
      this.router.navigate(['/invoice']);
    }).unsubscribe();
  }
  handleCancel() {
    console.log('Cancel button clicked!');
  }

  updateQuantity(index: number, newQuantity: number, productId: number, prevQuantity: number) {
    this.store.dispatch(updateCartItemQuantity({
      index,
      quantity: newQuantity,
      previousQuantity: prevQuantity,
      productId
    }));
  }

  removeItem(index: number) {
    this.store.dispatch(removeCartItem({ index }));
  }

  getSubTotal(items: IProduct[]): number {
    return items.reduce((total, item) => total + item.price * item.quantity, 0);
  }
  
  getTotalItems(items: IProduct[]): number {
    return items.reduce((count, item) => count + item.quantity, 0);
  }

  getVATAmount(subTotal: number): number {
    return (subTotal * this.vatPercentage) / 100;
  }
  getDiscountAmount(subTotal: number, discount: number) {
    console.log("subTotal", subTotal, "discount", discount);
    const discountAmount =  ( subTotal * discount ) / 100;
    const getTotal = this.getVATAmount(subTotal);
    
    return getTotal - discountAmount;
     
  }
  
  getTotal(subTotal: number): number {
    const vatAmount = this.getVATAmount(subTotal);
    return subTotal + vatAmount - this.discountAmount;
  }

}
