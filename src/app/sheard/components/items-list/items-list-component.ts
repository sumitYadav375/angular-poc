import { Component } from '@angular/core';
import { ItemComponent } from '../item/item.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-items-list',
  standalone: true, 
  imports: [CommonModule, ItemComponent],
  templateUrl: './items-list-component.html',
  styleUrl: './items-list-component.css'
})
export class ItemsListComponent {

}
