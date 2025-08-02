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
import CategoryPage from "./pages/CategoryPage.jsx";
import Wishlist from "./pages/Wishlist.jsx";
import Products from "./features/products/Products.jsx";

//global store
import { Provider } from "react-redux";
import store from "./store/Store.js";

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
      { path: "wishlist", element: <Wishlist /> },
      { path: "products/:id", element: <Products /> },
      { path: "product/:category", element: <CategoryPage /> },
    ],
  },
]);


// Render the app
createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
