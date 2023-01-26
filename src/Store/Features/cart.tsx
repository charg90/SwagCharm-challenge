import { createSlice } from "@reduxjs/toolkit";
import { CartItem } from "../../Models/CartItems";

const initialState: CartItem[] = [
  {
    id: 1,
    title: "My Christmas pack",
    quantity: 50,
    price: 71.2,
    subItems: "Card box",
    subtItems2: "Unisex short sleeve T-Shirt",
    subtItems3: "Basic bootle",
  },
  {
    id: 2,
    title: "Basic T-Shirt",
    quantity: 10,
    price: 13.5,
  },
  {
    id: 3,
    title: "Woman Bottle",
    quantity: 20,
    price: 35.5,
  },
];

export const cartSlice = createSlice({
  name: "Cart",

  initialState,
  reducers: {
    updateCart: (state) => {},
    deleteCart: (state) => {},
    // Use the PayloadAction type to declare the contents of `action.payload`
  },
});

export const { updateCart, deleteCart } = cartSlice.actions;

export default cartSlice.reducer;
