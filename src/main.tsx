import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router";

import routes from "./routes";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={routes} />
  </React.StrictMode>,
);
