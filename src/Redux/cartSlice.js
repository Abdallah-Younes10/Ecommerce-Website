import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: JSON.parse(localStorage.getItem("cart")) || [],
};

const saveCart = (state) => {
  localStorage.setItem("cart", JSON.stringify(state.items));
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;
      const existing = state.items.find((x) => x.id === item.id);

      if (existing) {
        existing.qty += 1;
      } else {
        state.items.push({ ...item, qty: 1 });
      }

      saveCart(state);
    },

    removeFromCart: (state, action) => {
      state.items = state.items.filter((x) => x.id !== action.payload);
      saveCart(state);
    },

    incrementQty: (state, action) => {
      const item = state.items.find((i) => i.id === action.payload);
      if (item) item.qty += 1;
    },
    decrementQty: (state, action) => {
      const item = state.items.find((i) => i.id === action.payload);
      if (item && item.qty > 1) item.qty -= 1;
    },

    clearCart: (state) => {
      state.items = [];
      saveCart(state);
    },
  },
});

export const { addToCart, removeFromCart, clearCart, incrementQty, decrementQty } = cartSlice.actions;
export default cartSlice.reducer;
