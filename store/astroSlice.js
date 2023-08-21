import { createSlice } from "@reduxjs/toolkit";

const astroSlice=createSlice({
  name:'astro',
  initialState: {
    basket: [],
  },
  reducers: {
    addInBasket(state,action) {
     // console.log(action, state)
      state.basket.push(action.payload.el)
    }
  }

})

export const {addInBasket} = astroSlice.actions;
export default astroSlice.reducer