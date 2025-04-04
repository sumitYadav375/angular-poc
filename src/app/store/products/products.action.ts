import { createAction, props } from "@ngrx/store";
import {IProduct} from '../../model/products.model'

export const loadProducts = createAction("[Products] Load");

export const loadProductsSuccess = createAction(
    '[Products] Load Success',
    props<{ products: IProduct[] }>()
  );

export const loadProductsFailure = createAction(
    '[Products] Load Failure',
    props<{ error: string }>()
);

export const decrementProductQuantity = createAction(
  '[Products] Decrement Product Quantity',
  props<{ productId: number }>()
);