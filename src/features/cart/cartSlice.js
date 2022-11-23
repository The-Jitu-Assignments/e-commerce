import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const url = 'https://react-grid-dashboard-857a2-default-rtdb.firebaseio.com/cart.json';

const initialState = {
  cart: []
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {},
  extraReducers: {}
});

export default cartSlice.reducer;