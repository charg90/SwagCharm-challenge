import { createSlice, PayloadAction, current } from "@reduxjs/toolkit";
import { CartItem } from "../../Models/CartItems";
interface UpdateQuantityPayload {
  id: number;
  quantity: number;
}

export const cartSlice = createSlice({
  name: "Cart",

  initialState: {
    cart: [
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
    ],
  },
  reducers: {
    updateQuantity: (state, action: PayloadAction<UpdateQuantityPayload>) => {
      const { id, quantity } = action.payload;

      const itemIndex: number = state.cart.findIndex((item) => item.id == id);
      state.cart[itemIndex].quantity = quantity;
    },
    deleteCart: (state, { payload }: PayloadAction<number>) => {
      state.cart = state.cart.filter((product) => product.id !== payload);
    },
  },
});

export const { updateQuantity, deleteCart } = cartSlice.actions;

export default cartSlice.reducer;
