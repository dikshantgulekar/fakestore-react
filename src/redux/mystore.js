import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "./Slices/searchSlice"
import cartReducer from "./Slices/cartSlice"
import categoryReducer  from "./Slices/categorySlice";



const mystore = configureStore({
    reducer:{
       search : searchReducer,
       cart: cartReducer,
       category : categoryReducer
    }
})

export default mystore;