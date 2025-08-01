import { createSlice } from "@reduxjs/toolkit";

const initialState = [];
const cardSlice = createSlice({
  name: "card",
  initialState,
  reducers:{
    addToCard: (state, action) => {
      state.push(action.payload);
    },
    removeCard: (state, action) => {
      const index = state.findIndex(item => item.id === action.payload.id);
      if (index !== -1) {
        state.splice(index, 1);
      }
    }
  }
});

