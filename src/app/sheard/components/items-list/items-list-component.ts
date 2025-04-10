import { Component, inject, OnInit } from '@angular/core';
import { ItemComponent } from '../item/item.component';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { IProduct } from '../../../model/products.model';
import { ProductsService } from '../../../services/products.service';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ProductsState } from '../../../store/products/products.reducer';
import { decrementProductQuantity, loadProducts } from '../../../store/products/products.action';
import { selectProducts } from '../../../store/products/products.selectors';
import { addToCart } from '../../../store/addToCard/addToCard.action';

@Component({
  selector: 'app-items-list',
  standalone: true, 
  imports: [CommonModule, ItemComponent, NgIf, NgFor],
  templateUrl: './items-list-component.html',
  styleUrl: './items-list-component.css'
})
export class ItemsListComponent implements OnInit {
    private store = inject(Store)    
    products$: Observable<IProduct[]> = this.store.select(selectProducts)
    ngOnInit() {
        this.store.dispatch(loadProducts());
    }


    handleAddToCart(product: IProduct) {
      if (product.quantity === 0) return;
         this.store.dispatch(addToCart({ product }));
        this.store.dispatch(decrementProductQuantity({ productId: product.id }));
      }
}
