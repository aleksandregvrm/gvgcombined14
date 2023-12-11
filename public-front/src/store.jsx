import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "./features/products/productsSlice";
import menuSlice from "./features/menu/menuSlice";
import userSlice from './features/user/userSlice';
import adminSlice from "./features/ad-controls/adminSlice";


export const store = configureStore({
  reducer: {
    products:productsSlice,
    menu:menuSlice,
    user:userSlice,
    admin:adminSlice,
  },
});
