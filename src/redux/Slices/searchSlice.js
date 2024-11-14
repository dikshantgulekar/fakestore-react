import { createSlice } from "@reduxjs/toolkit";


const initialState={
    value: ''
}

const searchSlice = createSlice({
    name : 'search',
    initialState,
    reducers:{
        changeCategoryName:(state, action)=>{
            console.log("changeCategoryName")
            state.value = action.payload;
        }
    }
})

export const {changeCategoryName } = searchSlice.actions

export default searchSlice.reducer