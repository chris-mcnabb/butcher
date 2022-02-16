import { createSlice } from "@reduxjs/toolkit";

export const mailSlice = createSlice({
    name: "mail",
    initialState: {
        messages: [],
        isFetching: false,
        messageError: false,
        messageResponse: {},

    },
    reducers: {
        getMailStart: (state) => {
            state.isFetching = true
            state.messageError = false

        },
        getMailSuccess: (state, action) => {

            state.messages = action.payload
        },
        getMailFailure: (state) => {
            state.isFetching = true
            state.messageError = true
        },
        deleteMailStart: (state) => {
            state.isFetching = true;
            state.messageError = false;

        },
        deleteMailSuccess: (state, action) => {
            state.isFetching = false;
            state.messages.splice(
                state.messages.findIndex((item) => item._id === action.payload),
                1
            );
        },
        deleteMailStatus: (state, action) => {
            state.messageResponse = action.payload;
        },
        deleteMailFailure: (state) => {
            state.isFetching = false;
            state.messageError = true;
        },
    },

});

export const {
    deleteMailStatus,
    getMailStart,
    getMailSuccess,
    getMailFailure,
    deleteMailStart,
    deleteMailSuccess,
    deleteMailFailure



} = mailSlice.actions;

export default mailSlice.reducer;
