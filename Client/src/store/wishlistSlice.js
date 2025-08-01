import { createSlice } from "@reduxjs/toolkit";

const initialState = []; // Fixed typo in "intialState" to "initialState"
const wishlistSlice = createSlice({
  name: "Wishlist",
  initialState: initialState,
  reducers: {
    addToWishlist: (state, action) => {
      const product = action.payload;
      const exists = state.find((item) => item.id === product.id);
      if (!exists) {
        state.push(product);
      }
    },
    removeFromWishlist: (state, action) => {
      const idToRemove = action.payload;
      return state.filter((item) => item.id !== idToRemove);
    },

  },
});

export default wishlistSlice.reducer;
export const { addToWishlist, removeFromWishlist } =
  wishlistSlice.actions;
