import { Component } from '@angular/core';
import { ItemsListComponent } from '../../components/items-list/items-list-component';
import { AddToCardComponent } from '../../components/add-to-card/add-to-card.component';

@Component({
  selector: 'app-home',
  imports: [ItemsListComponent, AddToCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
