import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    initializeQuantities: (state, action) => {
      action.payload.forEach((product) => {
        state[product.id] = { quantity: 1 }; // Initialize each product's quantity to 1
      });
    },

    increaseQuantity: (state, action) => {
      if (state[action.payload]) {
        state[action.payload].quantity += 1;
      }
    },

    decreaseQuantity: (state, action) => {
      if (state[action.payload] && state[action.payload].quantity > 1) {
        state[action.payload].quantity -= 1;
      }
    },
  },
});

export default productSlice.reducer;
export const { initializeQuantities, increaseQuantity, decreaseQuantity } =
  productSlice.actions;
