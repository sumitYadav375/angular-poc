import { createReducer, on } from "@ngrx/store";
import { IProduct } from "../../model/products.model";
import { addToCart, removeCartItem, updateCartItemQuantity } from "./addToCard.action";

export interface AddToCardState {
  items: IProduct[];
}

const initialState: AddToCardState = {
  items: [],
};

export const AddToCardReducer = createReducer(
  initialState,
  on(addToCart, (state, { product }) => {
    const existingProduct = state.items.find((item) => item.name === product.name);

    if (existingProduct) {
      return {
        ...state,
        items: state.items.map((item) =>
          item.name === product.name
            ? { ...item, quantity: (item.quantity ?? 1) + 1 }
            : item
        ),
      };
    } else {
      return {
        ...state,
        items: [...state.items, { ...product, quantity: 1 }],
      };
    }
  }),
  on(updateCartItemQuantity, (state, { index, quantity, previousQuantity }) => {
    const updatedItems = [...state.items];
    const updatedItem = { ...updatedItems[index] };
  
    updatedItem.quantity = quantity;
    updatedItems[index] = updatedItem;
  
    return {
      ...state,
      items: updatedItems
    };
  }),

  on(removeCartItem, (state, { index }) => ({
    ...state,
    items: state.items.filter((_, i) => i !== index)
  }))
);
