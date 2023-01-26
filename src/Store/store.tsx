import { configureStore } from "@reduxjs/toolkit";
import Cart from "./Features/cart";
import { CartItem } from "../Models/CartItems";
export const store = configureStore({
  reducer: {
    cart: Cart,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
