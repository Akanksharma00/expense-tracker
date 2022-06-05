import { createSlice } from "@reduxjs/toolkit";

const initialUserState = {
    name: '',
    email: ''
};

const userSlice = createSlice({
    name: 'user',
    initialState: initialUserState,
    reducers: {
        updateUserData(state,action){
            state.name = action.payload.name;
            state.email = action.payload.email;
        },
        updateUserName(state,action){
            state.name = action.payload.name;
        }
    }
});

export const userActions = userSlice.actions;

export default userSlice.reducer;