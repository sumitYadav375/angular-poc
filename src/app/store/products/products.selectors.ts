import { createFeatureSelector, createSelector } from "@ngrx/store";
import { ProductsState } from "./products.reducer";

export const selectProductsState = createFeatureSelector<ProductsState>('productsState');

export const selectProducts = createSelector(
    selectProductsState,
    (state) => state.products
)