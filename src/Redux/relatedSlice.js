import { createSlice } from "@reduxjs/toolkit";

const initialState = {
     relatedCategories: [],
}




const relatedSlice = createSlice({
  name: "related",
  initialState,
  reducers: {
    addRelatedCategory: (state, action) => {
      const category = action.payload;
      if (!state.relatedCategories.includes(category)) {
        state.relatedCategories.push(category);
      }
      // نحتفظ فقط بآخر 3-5 فئات
      if (state.relatedCategories.length > 2) {
        state.relatedCategories.shift();
      }
    },
    resetRelatedCategories: (state) => {
      state.relatedCategories = [];
    },
  },
});


export const{
    addRelatedCategory
} = relatedSlice.actions;

export default relatedSlice.reducer;