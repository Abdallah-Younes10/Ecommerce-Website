import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  ids: JSON.parse(localStorage.getItem("wishlist")) || [],

};

const saveWishlist = (state) => {
  localStorage.setItem("wishlist", JSON.stringify(state.ids));
};

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    toggleWishlist: (state, action) => {
      const id = action.payload;
      if (state.ids.includes(id)) {
        state.ids = state.ids.filter((x) => x !== id);
      } else {
        state.ids.push(id);
      }
      saveWishlist(state);
    },
    clearWishlist: (state) => {
      state.ids = [];
      saveWishlist(state);
    },
  },
});

export const { toggleWishlist, clearWishlist } = wishlistSlice.actions;
export default wishlistSlice.reducer;
