import React from 'react';
import"./CardProduct.scss"
import {useSelector} from "react-redux";
import {selectProducts} from "../../features/ProductSlice.js";
import ProductCard from "./ProductCard.jsx";


const OurProducts = () => {
    const product = useSelector(selectProducts)

    return (
        <div className={"product-container"}>
            {
                product.map(product => (<ProductCard key={product.id} product={product}/>))
            }
        </div>
    );
};

export default OurProducts;