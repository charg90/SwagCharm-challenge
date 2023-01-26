import { configureStore } from "@reduxjs/toolkit";
import Cart from "./Features/cart";
import { CartItem } from "../Models/CartItems";
import { useDispatch } from "react-redux";
export const store = configureStore({
  reducer: {
    cart: Cart,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch; //
export default store;
