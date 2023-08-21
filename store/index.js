import { configureStore } from "@reduxjs/toolkit";
import astroReducer from "./astroSlice"

export default configureStore({
  reducer:{
    astro: astroReducer,
  }
})