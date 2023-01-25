import { createBrowserRouter } from "react-router-dom";
import LayoutCart from "../Layout/LayoutCart";

export const router = createBrowserRouter([
  { path: "/", element: <LayoutCart /> },
]);
