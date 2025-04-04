import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-item',
  standalone: true, 
  imports: [],
  templateUrl: './item.component.html',
  styleUrl: './item.component.css'
})
export class ItemComponent {
    @Input() name: string = '';
    @Input() price: number = 0;
    @Input() description: string = '';
    @Input() image: string = '';
    @Input() quantity: number = 0;
    @Input() disabled: boolean = false;
    @Output() handleAddToCart = new EventEmitter<void>();
}
