import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Index from "./components/Index";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <div>404</div>,
    children: [{ index: true, element: <Index /> }],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
