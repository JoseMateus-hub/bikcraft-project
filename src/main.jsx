import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Login from "./components/Login";
import Checkout from "./components/Checkout";
import PedidoFinalizado from "./components/PedidoFinalizado";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
  path: "/checkout",
  element: <Checkout />,
},
{
  path: "/pedido-finalizado",
  element: <PedidoFinalizado />,
}
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);