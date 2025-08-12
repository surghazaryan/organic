import {createSlice} from "@reduxjs/toolkit";
import productData from '../assets/dataProduct/products.json';


const initialState = {
    product: productData,
    card:[],
    searchQuery: '',
}


const ProductSlice = createSlice({
    name: 'products',
    initialState: initialState,
    reducers: {
        addProductCard: (state, action) => {
            state.card.push(action.payload);
        },
        addNewProduct:(state, action) => {
            state.product.push(action.payload);

        },
        setSearchQuery: (state, action) => {
            state.searchQuery = action.payload;
        },
        deleteProduct: (state, action) => {
            state.card = state.card.filter(card => card.id !== action.payload);
        }
    }
})
export const selectProducts = (state) => state.products.product
export const selectCard = (state, action) => state.products.card

export default ProductSlice.reducer;
export const { addProductCard,addNewProduct,setSearchQuery,deleteProduct} = ProductSlice.actions;