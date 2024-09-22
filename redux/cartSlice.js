import AsyncStorage from "@react-native-async-storage/async-storage";
import { createSlice } from "@reduxjs/toolkit"; 

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
     add_to_Cart:(state, action) => {
      state.push(action.payload); // Access the payload via action.payload
      AsyncStorage.setItem('cart',JSON.stringify(action.payload))
    },
    remove_from_Cart: (state, action) => {
      return state.filter(item => item.title !== action.payload.title); // Access payload via action.payload
    }
  }
});

export const { add_to_Cart, remove_from_Cart } = cartSlice.actions;
export default cartSlice.reducer;
