import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import themeSlice from "./themeSlice"
const Store = configureStore({
  reducer: {
    auth: authSlice,
    theme: themeSlice,
  },
});

export default Store;
