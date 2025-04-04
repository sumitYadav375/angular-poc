import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AddToCardState } from "./addToCard.reducer";

export const  selectAddToCardState = createFeatureSelector<AddToCardState>('addToCardState');

export const selectAddToCard = createSelector(
    selectAddToCardState,
    (state) => state.items
)