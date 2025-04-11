import { Component, inject, OnInit } from '@angular/core';
import { Observable, pipe } from 'rxjs';
import { AddToCardState } from '../../../store/addToCard/addToCard.reducer';
import { Store } from '@ngrx/store';
import { selectAddToCardState } from '../../../store/addToCard/addToCard.selector';
import { FormsModule } from '@angular/forms';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { CustomPipPipe } from '../../../pipe/custom-pip.pipe';

@Component({
  selector: 'app-invoice',
  imports: [FormsModule, CommonModule,  NgFor, NgIf],
  templateUrl: './invoice.component.html',
  styleUrl: './invoice.component.css'
})
export class InvoiceComponent implements OnInit {
  private store = inject(Store)  
  cartState$: Observable<AddToCardState> = this.store.select(selectAddToCardState);
  getTotalQuantity(items: any[]): number {
    return items.reduce((sum, item) => sum + item.quantity, 0);
  }
  ngOnInit() {
    this.cartState$.subscribe(data => {
      console.log('Invoice data:', data);
      // you can access data.subTotal, data.total, etc.
    });
  }
}
