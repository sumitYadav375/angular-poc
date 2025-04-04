import { createReducer, on } from "@ngrx/store";
import { IProduct } from "../../model/products.model";
import { decrementProductQuantity, loadProducts, loadProductsFailure, loadProductsSuccess } from "./products.action";
import { updateCartItemQuantity } from "../addToCard/addToCard.action";

export interface ProductsState {
    products: IProduct[];
    loading: boolean;
    error: string;
}

export const initialState: ProductsState = {
    products : [],
    loading : false,
    error : ''
}

export const productsReducer = createReducer(
    initialState,
    on(loadProducts, (state) => ({...state, loading: true})),
    on(loadProductsSuccess, (state, { products }) => ({ ...state, products, loading: false })),
    on(loadProductsFailure, (state, { error }) => ({ ...state, error, loading: false })),
    on(decrementProductQuantity, (state, { productId }) => ({
        ...state,
        products: state.products.map(p =>
          p.id === productId && p.quantity > 0
            ? { ...p, quantity: p.quantity - 1 }
            : p
        )
      })),

      on(updateCartItemQuantity, (state, { quantity, previousQuantity, productId }) => {
        const updatedProducts = state.products.map(product => {
          if (product.id === productId) {
            const difference = quantity - previousQuantity;
      
            return {
              ...product,
              quantity: product.quantity - difference 
            };
          }
          return product;
        });
      
        return {
          ...state,
          products: updatedProducts
        };
      })
)