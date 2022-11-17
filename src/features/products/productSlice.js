import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  cart: []
}

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.cart = action.payload
    }
  }
})

export const { addToCart } = productSlice.actions;

export default productSlice.reducer;