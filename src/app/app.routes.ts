import { Routes } from '@angular/router';
import { InvoiceComponent } from './sheard/pages/invoice/invoice.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './sheard/pages/home/home.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path:'invoice',
        component: InvoiceComponent
    }
];
