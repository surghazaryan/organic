import React from 'react';
import "./CardProduct.scss"
import {useSelector} from "react-redux";
import {selectProducts} from "../../features/ProductSlice.js";
import ProductCard from "./ProductCard.jsx";
import NotFound from "../../pages/notfound/NotFound.jsx";


const OurProducts = () => {
    const products = useSelector(selectProducts)
    const searchQuery = useSelector((state) => state.products.searchQuery);
    const filteredProducts = products.filter((product) =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    return (
        <div className={"product-container"}>
            {
                filteredProducts.length === 0 ? <NotFound/> : filteredProducts.map((product) => (
                    <ProductCard key={product.id} product={product}/>
                ))
            }
        </div>
    );
};

export default OurProducts;