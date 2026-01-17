import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  search: "",
  category: [],
  brand: [],
  price: [],
  rating: [],
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setSearch: (state, action) => {
      state.search = action.payload;
    },
    setCategory: (state, action) => {
      const value = action.payload;

      if (state.category.includes(value)) {
        state.category = state.category.filter((c) => c !== value);
      } else {
        state.category.push(value);
      }
    },

    setBrand: (state, action) => {
      const value = action.payload;

      if (state.brand.includes(value)) {
        state.brand = state.brand.filter((b) => b !== value);
      } else {
        state.brand.push(value);
      }
    },

    setRating: (state, action) => {
      if (!Array.isArray(state.rating)) {
        state.rating = [];
      }

      const value = action.payload;

      if (state.rating.includes(value)) {
        state.rating = state.rating.filter((r) => r !== value);
      } else {
        state.rating.push(value);
      }
    },

    clearFilters: (state) => {
      Object.assign(state, initialState);
    },
    setPriceRange: (state, action) => {
      if (!Array.isArray(state.price)) {
        state.price = [];
      }

      const range = action.payload;

      const exists = state.price.some(
        (r) => r.min === range.min && r.max === range.max
      );

      if (exists) {
        state.price = state.price.filter(
          (r) => !(r.min === range.min && r.max === range.max)
        );
      } else {
        state.price.push(range);
      }
    },
  },
});

export const {
  setSearch,
  setCategory,
  setBrand,
  setPriceRange,
  setRating,
  clearFilters,
} = filterSlice.actions;

export default filterSlice.reducer;
