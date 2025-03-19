import { configureStore } from "@reduxjs/toolkit";
import { selectedItemReducer } from "./uiSlice";
import {newsReducer} from "./newsSlice";

const store = configureStore({
    reducer:{
        ui:selectedItemReducer,
        news:newsReducer,
    }
})

export default store;