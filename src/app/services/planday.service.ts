import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { IProduct } from "../model/products.model";

@Injectable({
    providedIn: 'root'
})

export class PlandayService {
    constructor() {}
    getPlandaysData() {
        return [
            {
                PDepartments: 'planday 1 Departments',
                ZDepartments: 'select Department',
                status: 'undefined'
            },
            {
                PDepartments: 'planday 2  Departments',
                ZDepartments: 'select Department',
                status: 'undefined'
            },
            {
                PDepartments: 'planday 3 Departments',
                ZDepartments: 'select Department',
                status: 'undefined'
            },
            {
                PDepartments: 'planday 4 Departments',
                ZDepartments: 'select Department',
                status: 'undefined'
            },
            {
                PDepartments: 'planday 5 Departments',
                ZDepartments: 'select Department',
                status: 'undefined'
            }
        ]
    }
}