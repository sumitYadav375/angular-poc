import { inject } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { ProductsService } from "../../services/products.service";
import { loadProducts, loadProductsFailure, loadProductsSuccess } from "./products.action";
import { catchError, map, mergeMap, of } from "rxjs";

export const loadProductsEffect = createEffect(
    (actions$ = inject(Actions)) => {
      const service = inject(ProductsService);
      return actions$.pipe(
        ofType(loadProducts),
        mergeMap(() =>
          service.getProducts().pipe(
            map(products => loadProductsSuccess({ products })),
            catchError(error => of(loadProductsFailure({ error })))
          )
        )
)},
    {
      functional: true, // ✅ THIS IS IMPORTANT
    }

  );
  