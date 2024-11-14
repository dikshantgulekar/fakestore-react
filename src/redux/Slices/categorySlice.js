import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value : ''
}

export const categorySlice = createSlice({
    name : 'category',
    initialState,
    reducers:{
        passCategoryName : (state, action)=>{
            console.log('changeCategoryName')
            console.log(action.payload);
            state.value = action.payload
        }
    }
})

export const {passCategoryName} = categorySlice.actions

export default categorySlice.reducer