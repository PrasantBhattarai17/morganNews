import { createSlice } from "@reduxjs/toolkit";



const newsSlice = createSlice({
       name:"news",
       initialState:{
         trending:null,
         sports:null,
         business:null,
         politics:null,
         category:false,
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
         ,
         toggleCategory:(state,action)=>{
            state.category=!state.category;
        }
       }
})

export const {addTrendingNews,addSportsNews,addBusinessNews,addPoliticsNews,toggleCategory} = newsSlice.actions;

export const newsReducer = newsSlice.reducer;