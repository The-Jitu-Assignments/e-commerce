import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./features/products/productSlice";
import userSlice from "./features/user/UserSlice";


export const store = configureStore({
  reducer: {
    user: userSlice,
    product: productSlice
  }
})