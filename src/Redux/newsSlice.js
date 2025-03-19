import { createSlice } from "@reduxjs/toolkit";



const newsSlice = createSlice({
       name:"news",
       initialState:{
         trending:null,
         sports:null,
         business:null,
         politics:null
       },
       reducers:{
         addTrendingNews:(state,action)=>{
            state.trending = action.payload;
         },
         addSportsNews:(state,action)=>{
            state.sports = action.payload;
         },
         addBusinessNews:(state,action)=>{
            state.business=action.payload
         },
         addPoliticsNews:(state,action)=>{
            state.politics=action.payload;
         }
       }
})

export const {addTrendingNews,addSportsNews,addBusinessNews,addPoliticsNews} = newsSlice.actions;

export const newsReducer = newsSlice.reducer;