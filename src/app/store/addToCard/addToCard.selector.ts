import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AddToCardState } from "./addToCard.reducer";

export const  selectAddToCardState = createFeatureSelector<AddToCardState>('addToCardState');

export const selectAddToCard = createSelector(
    selectAddToCardState,
    (state) => state.items
)

export const selectCartSubTotal = createSelector(selectAddToCardState, (state) => state.subTotal);
export const selectCartVat = createSelector(selectAddToCardState, state => state.vat);
export const selectCartDiscount = createSelector(selectAddToCardState, state => state.discount);
export const selectCartTotal = createSelector(selectAddToCardState, state => state.total);