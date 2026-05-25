import { configureStore } from "@reduxjs/toolkit";
import filtersReducer from "./features/filterSlice";
import authReducer from "./features/authSlice"

export const store = configureStore({
    reducer: {
        filters: filtersReducer,
        auth:authReducer
    },
});