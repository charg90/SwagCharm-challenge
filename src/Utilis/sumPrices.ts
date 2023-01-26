import { CartItem } from "../Models/CartItems";

export default function sumPrices(items: CartItem[]) {
  return items.reduce((acc, item) => acc + item.price * item.quantity, 0);
}
