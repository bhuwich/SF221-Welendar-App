import { configureStore } from "@reduxjs/toolkit";
import todoSlice from './actions/action';

export const Store = configureStore({
    reducer:{
        todos:todoSlice,
    },
})