import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import userSlice from "./userSlice";
 const Store = configureStore({
    reducer:{
        cart:cartSlice,
        user:userSlice
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
          serializableCheck: false,  // Disable serializability check for redux-persist
        }),

})
export default Store