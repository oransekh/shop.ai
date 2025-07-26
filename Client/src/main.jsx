import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import { Navigate } from "react-router-dom";

import Layout from "./components/layouts/Layout.jsx";
import Men from "./pages/Men.jsx";
import Woman from "./pages/Woman.jsx";
import Sale from "./pages/Sale.jsx";
import Kids from "./pages/Kids.jsx";
import Cart from "./pages/Cart.jsx";

// Create the router
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Navigate to="men" replace /> },
      { path: "men", element: <Men /> },
      { path: "women", element: <Woman /> },
      { path: "kids", element: <Kids /> },
      { path: "sale", element: <Sale /> },
      { path: "cart", element: <Cart /> },
    ],
  },
]);

// Render the app
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
