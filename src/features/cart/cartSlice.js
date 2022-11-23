import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const url = 'https://react-grid-dashboard-857a2-default-rtdb.firebaseio.com/cart.json';

const initialState = {
  cart: []
};

export const fetchItems = createAsyncThunk('cart/fetchItems',
  async () => {
    const res = await axios.get(url);
    let cartData = [];
    let data = res.data;
    for (let key in data) {
      cartData.push({
        id: key,
        productId: data[key].id,
        name: data[key].name,
        image: data[key].imageUrl,
        price: data[key].price,
        count: data[key].count
      })
    }
    return cartData;
  }
)

export const addToCart = createAsyncThunk('cart/addToCart',
  async (values) => {
    console.log(values)
    try {
      const res = await axios.post(url, values);
      console.log(res)
    } catch (error) {
      console.log(error)
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

export default cartSlice.reducer;