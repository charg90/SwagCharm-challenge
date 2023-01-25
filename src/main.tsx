import React from "react";
import ReactDOM from "react-dom/client";

import { RouterProvider } from "react-router-dom";
import { router } from "./router/router";
import { ThemeConfig } from "./Theme/Theme";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ThemeConfig>
      <RouterProvider router={router} />
    </ThemeConfig>
  </React.StrictMode>
);
