import { Component, OnInit } from '@angular/core';
import { ItemComponent } from '../item/item.component';
import { CommonModule } from '@angular/common';
import { IProduct } from '../../../model/products.model';
import { ProductsService } from '../../../services/products.service';

@Component({
  selector: 'app-items-list',
  standalone: true, 
  imports: [CommonModule, ItemComponent],
  templateUrl: './items-list-component.html',
  styleUrl: './items-list-component.css'
})
export class ItemsListComponent implements OnInit {

    products: IProduct[] = [];

    constructor(private productService: ProductsService) {}

    ngOnInit() {
        this.productService.getProducts().subscribe((data) => {
            this.products = data
        }) 
    }

}
