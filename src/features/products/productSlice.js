import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { validateProductSchema } from "../../helpers/validation";

const url = 'https://react-grid-dashboard-857a2-default-rtdb.firebaseio.com/react-grid-dashboard.json';

const initialState = {
  products: [],
  cart: []
};

export const createProduct = createAsyncThunk('product/createProduct',
  async (values) => {
    try {
      await validateProductSchema(values)
      const res = await axios.post(url, values)
      return res.data
    } catch (error) {
      console.log(error)
    }
  }
);

export const fetchProducts = createAsyncThunk('product/fetchProducts',
  async () => {
    const res = await axios.get(url);
    return res.data
  }
)

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.cart = action.payload
    }
  },
  extraReducers(builder) {
    builder.addCase(createProduct.fulfilled, (state, action) => {
      state.products.push(action.payload);
    })
  }
})

export const { addToCart } = productSlice.actions;

export default productSlice.reducer;