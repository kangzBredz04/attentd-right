import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import UserPage from "./pages/UserPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    // errorElement: <ErrorPageAdmin />,
    children: [
      {
        path: "/admin",
        // element: <DashboardAdmin />,
      },
      {
        path: "/admin/user",
        element: <UserPage />,
      },
      {
        path: "/admin/profile",
        // element: <MyAccountAdmin />,
      },
      {
        path: "/admin/stock",
        // element: <StockAdmin />,
      },
      {
        path: "/admin/order",
        // element: <OrderAdmin />,
      },
      {
        path: "/admin/product",
        // element: <ProductAdmin />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
