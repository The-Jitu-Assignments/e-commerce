import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  products: [],
  cart: []
};

export const createProduct = createAsyncThunk('product/createProduct',
  async (values) => {
    try {
      const res = await axios.post(url, values)
      return res.data
    } catch (error) {
      console.log(error)
    }
  }
)

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