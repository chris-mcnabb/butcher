import {createSlice} from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: {
        currentUser: null,
        isFetching: false,
        error: false,
        response: {}
    },
    reducers: {
        loginStart: (state)=>{
            state.isFetching=true;
        },
        loginSuccess: (state, action)=>{
            state.isFetching=false;
            state.currentUser=action.payload;
            state.isLoggedIn=true;
        },
        loginFailure: (state, action)=>{
            state.isFetching=false;
            state.error = true;
        },
        loginStatus: (state, action) => {
            state.response = action.payload
        },
        logout: (state)=>{
            state.currentUser = null;

        },

    },
});

export const {loginStart, loginSuccess, loginFailure, logout, loginStatus} = userSlice.actions;
export default userSlice.reducer;
