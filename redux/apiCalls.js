
import {
    updateProductStart,
    updateProductSuccess,
    updateProductFailure,
    updateProductStatus,
    addProductStart,
    addProductSuccess,
    addProductFailure,
    deleteProductStart,
    deleteProductSuccess,
    deleteProductFailure,
    deleteProductStatus
} from "./productRedux";
import {
    deleteMailStart,
    deleteMailSuccess,
    deleteMailFailure,
    deleteMailStatus
} from "./mailRedux";
import axios from "axios";

export const addProduct = async (product, dispatch) => {
    dispatch(addProductStart());
    try{
        const res = await axios.post(`http://localhost:3000/api/products/`, product)

        dispatch(addProductSuccess(res.data))
        console.log(res.data)
    }catch(err){
        dispatch(addProductFailure(true));
        console.log(err)
    };

}


export const updateProduct = async (dispatch, id, product) => {
    dispatch(updateProductStart());
    try{
        const res = await axios.put(`http://localhost:3000/api/products/${id}`, product

        );
        dispatch(updateProductSuccess(id, product));
        dispatch(updateProductStatus(res.data));
        console.log("this data", res.data)
    }catch(err){
        dispatch(updateProductFailure());
    }

};
export const deleteMessage = async (id, dispatch) => {
    dispatch(deleteMailStart());
    try{
        const res = await axios.delete(`http://localhost:3000/api/mail/${id}`,

        );
        dispatch(deleteMailSuccess(id));
        dispatch(deleteMailStatus(res.data))
        console.log(res.data)
    }catch(err){
        dispatch(deleteMailFailure());
        console.log(err)
    };
};
export const deleteProduct = async (id, dispatch) => {
    dispatch(deleteProductStart());
    try{
        const res = await axios.delete(`http://localhost:3000/api/products/${id}`,

        );
        dispatch(deleteProductSuccess(id));
        dispatch(deleteProductStatus(res.data))
        console.log(res.data)
    }catch(err){
        dispatch(deleteProductFailure());
        console.log(err)
    };
};
