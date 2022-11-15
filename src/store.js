import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./features/user/UserSlice";

console.log(userSlice);

export const store = configureStore({
  reducer: {
    user: userSlice
  }
})