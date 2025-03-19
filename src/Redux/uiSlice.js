import { createSlice } from "@reduxjs/toolkit";

const initialState={
    selectedItem : "Trending"
}

const uiSlice = createSlice({
    name:"ui",
    initialState,
    reducers:{
        updateSelectedItem:(state,action)=>{
            state.selectedItem=action.payload
        }
    }
});


export const {updateSelectedItem} = uiSlice.actions;

export const selectedItemReducer = uiSlice.reducer;