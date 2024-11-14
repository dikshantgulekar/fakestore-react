import { createSlice } from "@reduxjs/toolkit";

let initialState = {
    value : []
}

const cartSlice = createSlice({
    name : 'cart',
    initialState,
    reducers:{
        addRecordInPageLoad:(state, action)=>{
            console.log(action.payload);
            console.log('addRecordInPageLoad');
            state.value = action.payload

        },
        addRecordIncart: (state, action)=>{
            // console.log('addRecordIncart');
            // console.log(action.payload)
            state.value.push(action.payload);
        },
        deleteRecordFromCart: (state, action)=>{
            const idToRemove = action.payload;
            state.value = state.value.filter(item => item.id !== idToRemove);
        }
    }
});

export const { addRecordInPageLoad, addRecordIncart, deleteRecordFromCart } = cartSlice.actions

export default cartSlice.reducer