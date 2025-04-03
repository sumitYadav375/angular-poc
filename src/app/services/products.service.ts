import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { IProduct } from "../model/products.model";

@Injectable({
    providedIn: 'root'
})

export class ProductsService {
    private productsUrl = 'assets/products.json';

    constructor(private http: HttpClient) {}

    getProducts(): Observable<IProduct[]> {
        return this.http.get<IProduct[]>(this.productsUrl);
    }
}