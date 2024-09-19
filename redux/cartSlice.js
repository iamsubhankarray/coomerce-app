import { createSlice } from "@reduxjs/toolkit"; 

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
     add_to_Cart:(state, action) => {
      state.push(action.payload); // Access the payload via action.payload
      // console.log(action);
      
    },
    remove_from_Cart: (state, action) => {
      return state.filter(item => item.id !== action.payload.item); // Access payload via action.payload
    }
  }
});

export const { add_to_Cart, remove_from_Cart } = cartSlice.actions;
export default cartSlice.reducer;
