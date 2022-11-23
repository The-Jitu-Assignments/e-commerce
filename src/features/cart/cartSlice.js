import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const url = 'https://react-grid-dashboard-857a2-default-rtdb.firebaseio.com/cart.json';

const initialState = {
  cart: []
}

export const addToCart = createAsyncThunk('cart/addToCart',
  async (values) => {
    try {
      const res = await axios.post(url, values);
      console.log(res)
    } catch (error) {
      console.log(res)
    }
  }
)

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {},
  extraReducers (builder) {
    builder.addCase(addToCart.fulfilled, (state, action) => {
      console.log(action)
    })
  }
});

export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;