import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { validateProductSchema } from "../../helpers/validation";

const url = 'https://react-grid-dashboard-857a2-default-rtdb.firebaseio.com/react-grid-dashboard.json';

const initialState = {
  products: [],
  cart: [],
  message: ''
};

export const fetchProducts = createAsyncThunk('product/fetchProducts',
  async () => {
    const res = await axios.get(url);
    let myData = [];
    let fetchedData = res.data;
    for (let key in fetchedData) {
      myData.push({
        id: key,
        name: fetchedData[key].name,
        description: fetchedData[key].description,
        image: fetchedData[key].imageUrl,
        price: fetchedData[key].price,
        discount: fetchedData[key].discountRate,
        count: fetchedData[key].count
      })
    }
    return myData
  }
)

export const createProduct = createAsyncThunk('product/createProduct',
  async (values, { dispatch }) => {
    try {
      await validateProductSchema(values)
      const res = await axios.post(url, values);
      dispatch(fetchProducts())
    } catch (error) {
      console.log(error)
    }
  }
);


export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      let selectedItem = state.products.find(item => item.id === action.payload);
      const updatedProducts = state.products.map((product) => {
        if (product.id === selectedItem.id) {
          product.count = product.count + 1
        }
        return product
      })
      state.cart.push(selectedItem);
      state.products = updatedProducts;
    },
    increaseItemQuantity: (state, action) => {
      const updatedCart = state.cart.map((product) => {
        if (product.id === action.payload) {
          product.count = product.count + 1
        }
        return product
      })
      state.cart = updatedCart;
    }
  },
  extraReducers(builder) {
    builder.addCase(createProduct.fulfilled, (state, action) => {
      // state.products.push(action.payload);
    });
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.products = action.payload;
    })
  }
})

export const { addToCart, increaseItemQuantity } = productSlice.actions;

export default productSlice.reducer;