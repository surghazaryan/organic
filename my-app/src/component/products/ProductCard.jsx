import React from 'react';
import {Link} from "react-router-dom";
import "./CardProduct.scss"
import {useDispatch} from "react-redux";
import {addProductCard} from "../../features/ProductSlice.js";
const ProductCard = ({product}) => {
    const dispatch = useDispatch();
    return (
        <div>
            <div className="card">
                <Link to={"/"}>{product.category}</Link>
                <img src={product.img} alt="img"/>
                <h3>{product.name}</h3>
                <p>{product.price}</p>
                <button onClick={()=>{dispatch(addProductCard(product))}}>Add Cart</button>
            </div>
        </div>
    );
};

export default ProductCard;