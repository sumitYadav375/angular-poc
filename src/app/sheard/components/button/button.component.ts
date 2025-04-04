import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  template: `
    <button
      [ngStyle]="{ 'background-color': bgColor }"
      class="custom-button"
      (click)="onClick()"
    >
      {{ text }}
    </button>
  `,
  styles: [
    `
      .custom-button {
        color: white;
        border: none;
        padding: 10px 20px;
        font-size: 16px;
        cursor: pointer;
        border-radius: 5px;
        width:100%;
      }
    `,
  ],
})
export class ButtonComponent {
  @Input() text: string = 'Click Me'; 
  @Input() bgColor: string = '#007bff'; 
  @Output() btnClick = new EventEmitter<void>();

  onClick() {
    this.btnClick.emit();
  }
}
