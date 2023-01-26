import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./router/router";
import { ThemeConfig } from "./Theme/Theme";
import { Provider } from "react-redux";
import store from "./Store/store";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ThemeConfig>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </ThemeConfig>
  </React.StrictMode>
);
