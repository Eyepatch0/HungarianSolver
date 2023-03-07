import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Error from "./components/Error";
import Index from "./components/Index";
import Solve from "./components/Solve";
import Learn from "./components/Learn";
import Contact from "./components/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      { index: true, element: <Index />, errorElement: <Error /> },
      { path: "solve", element: <Solve />, errorElement: <Error /> },
      { path: "learn", element: <Learn />, errorElement: <Error /> },
      { path: "contact", element: <Contact />, errorElement: <Error /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
