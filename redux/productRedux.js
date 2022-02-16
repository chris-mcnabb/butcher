import { createSlice } from "@reduxjs/toolkit";

export const productSlice = createSlice({
    name: "product",
    initialState: {
        products: [],
        isFetching: false,
        error: false,
        response: {},
    },
    reducers: {
        getProductStart: (state) => {
            state.isFetching = true
            state.error = false

        },
        getProductSuccess: (state, action) => {

            state.products = action.payload

        },
        getProductFailure: (state) => {
            state.isFetching = true
            state.error = true
        },
        deleteProductStart: (state) => {
            state.isFetching = true;
            state.error = false;

        },
        deleteProductSuccess: (state, action) => {
            state.isFetching = false;
            state.products.splice(
                state.products.findIndex((item) => item._id === action.payload.id),
                1
            );

        },
        deleteProductStatus: (state, action) => {
            state.response = action.payload
        },
        deleteProductFailure: (state, action) => {
            state.isFetching = false;
            state.error = true;

        },
        updateProductStart: (state) => {
            state.isFetching = true;
            state.error = false;
        },
        updateProductSuccess: (state, action) => {
            state.isFetching = false;
            state.products[
                state.products.findIndex((item) => item._id ===action.payload.id)
                ] = action.payload.product;

        },
        updateProductStatus: (state, action) => {
            state.response = action.payload
        },
        updateProductTest: (state, action) => {
            //state.isFetching = false;
            state.products[
                state.products.findIndex((item) => item._id ===action.payload.id)
                ] = action.payload.product;

        },
        updateProductFailure: (state) => {
            state.isFetching = false;
            state.error = true;
        },
        addProductStart: (state) => {
            state.isFetching = true;
            state.error = false;
        },
        addProductSuccess: (state, action) => {
            state.isFetching = false;
            state.products.push(action.payload)

        },
        addProductFailure: (state) => {
            state.isFetching = false;
            state.error = true;
        },
        logoutProduct: (state) => {
            state.products = [];
        }
    },
});

export const {
    updateProductStatus,
    deleteProductStatus,
    logoutProduct,
    updateProductTest,
    getProductStart,
    getProductSuccess,
    getProductFailure,
    deleteProductStart,
    deleteProductSuccess,
    deleteProductFailure,
    updateProductStart,
    updateProductSuccess,
    updateProductFailure,
    addProductStart,
    addProductSuccess,
    addProductFailure
} = productSlice.actions;

export default productSlice.reducer;
