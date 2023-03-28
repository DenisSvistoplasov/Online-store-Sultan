import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "./slices/productsSlice";
import cartSlice from "./slices/cartSlice";


export const store = configureStore({
  reducer: {
    products: productsSlice,
    cart: cartSlice,
  }
});





export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;