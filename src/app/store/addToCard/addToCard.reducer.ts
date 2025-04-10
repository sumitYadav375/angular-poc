import { createReducer, on } from "@ngrx/store";
import { IProduct } from "../../model/products.model";
import { addToCart, clearCart, removeCartItem, setCartTotals, updateCartItemQuantity } from "./addToCard.action";

export interface AddToCardState {
  items: IProduct[];
  subTotal: number;
  vat: number;
  discount: number;
  total: number;

}

const initialState: AddToCardState = {
  items: [],
  subTotal: 0,
  vat: 0,
  discount: 0,
  total: 0,
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
  })),

  on(setCartTotals, (state, { subTotal, vat, discount, total}) => ({
    ...state,
    subTotal,
    vat,
    discount,
    total
  })),

  on(clearCart, (state) => ({
    ...state,
    items: [],
    cartItems: [],
    subTotal: 0,
    vat: 0,
    discount: 0,
    total: 0
  }))
  
);
