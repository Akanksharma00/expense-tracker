import { configureStore } from "@reduxjs/toolkit";

import authReducer from "./authReducer";
import expensesReducer from "./expensesReducer";
import userReducer from './userReducer';
import themeReducer from "./themeReducer";

const store = configureStore({
    reducer:{
        auth: authReducer,
        expenses: expensesReducer,
        user: userReducer,
        theme: themeReducer
    }
});

export default store;