import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ItemsListComponent } from './sheard/components/items-list/items-list-component';
import { AddToCardComponent } from './sheard/components/add-to-card/add-to-card.component';

@Component({
  selector: 'app-root',
  standalone: true, 
  imports: [RouterOutlet, ItemsListComponent, AddToCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'POC-E-kart-app';
}
