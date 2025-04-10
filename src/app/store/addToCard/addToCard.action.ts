import { createAction, props } from "@ngrx/store";
import { IProduct } from "../../model/products.model";

export const addToCart = createAction(
    '[AddToCard] add item',
    props<{product: IProduct}>() 
)

export const updateCartItemQuantity = createAction(
    '[Cart] Update Cart Item Quantity',
    props<{ index: number; quantity: number; previousQuantity: number; productId: number }>()
  );

export const removeCartItem = createAction(
    '[Cart] Remove Cart item',
    props<{index:number}>()
)

export const setCartTotals = createAction(
    '[Cart] Set Cart Totals',
    props<{
        subTotal: number;
        vat: number;
        discount: number;
        total: number;
    }>()
);

export const clearCart = createAction(
    '[Cart] Clear Cart'
)