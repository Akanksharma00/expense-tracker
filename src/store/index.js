import { configureStore } from "@reduxjs/toolkit";

import authReducer from "./authReducer";
import expensesReducer from "./expensesReducer";
import userReducer from './userReducer';

const store = configureStore({
    reducer:{
        auth: authReducer,
        expenses: expensesReducer,
        user: userReducer
    }
});

export default store;