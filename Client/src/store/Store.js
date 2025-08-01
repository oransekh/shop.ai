// src/store/store.js
import { configureStore } from "@reduxjs/toolkit";
import countReducer from "./productSlice";
import wishlistReducer from "./wishlistSlice";

const store = configureStore({
  reducer: {
    products: countReducer,
    wishlist: wishlistReducer,
  },
});
export default store;
