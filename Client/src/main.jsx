import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

import Layout from "./layouts/Layout.jsx";
import Home from "./pages/Home.jsx";


// Create the router
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, // Layout wraps all pages
    children: [{ path: "/", element: <Home /> }],
  },
]);

// Render the app
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
