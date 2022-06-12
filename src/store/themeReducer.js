import { createSlice } from "@reduxjs/toolkit";

const initialThemeState = {
    darkTheme: false,
    activateTheme: false,
};

const themeSlice = createSlice({
    name: 'theme',
    initialState: initialThemeState,
    reducers: {
        darkTheme(state,action){
            state.darkTheme = action.payload;
            state.activateTheme = action.payload;
        },
        toggleTheme(state){
            state.darkTheme = !state.darkTheme;
        }
    }
});

export const themeActions = themeSlice.actions;

export default themeSlice.reducer;