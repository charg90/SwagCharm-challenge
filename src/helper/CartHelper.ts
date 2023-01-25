export interface CartHelper {
  id: number;
  title: string;
  quantity: number;
  price: number;
  subItems?: string;
  subtItems2?: string;
  subtItems3?: string;
}

export const CartHelper: CartHelper[] = [
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
    id: 2,
    title: "Woman Bottle",
    quantity: 20,
    price: 35.5,
  },
];
