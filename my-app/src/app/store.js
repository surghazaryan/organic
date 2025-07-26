import {configureStore} from "@reduxjs/toolkit";
import ProductSlice from "../features/ProductSlice.js";

const checkName = (store) => (next) => (action) => {
    if (action.type === 'products/addNewProduct') {
        const products = store.getState().products.product;
        const newName = action.payload.name.trim().toLowerCase();
        const duplicate = products.find(
            (p) => p.name.trim().toLowerCase() === newName
        );
        if (duplicate) {
            alert('Product already exists.');
            return;
        }
        alert('You want add product ?');
    }
    next(action);
};






const store = configureStore({
    reducer:{
        products:ProductSlice
    },
    middleware:(getDefaultMiddleware)=>{
        return getDefaultMiddleware().concat(
            [
                checkName
            ]
        )
    }
})
export default store;