import React, {useState} from 'react';
import AddProducts from "../../component/products/AddProducts.jsx";

const About = () => {
    const [addProduct, setAddProduct] = useState(false)
    const onAddProduct = () => {
        setAddProduct(!addProduct)
    }
    return (
        <div>
            <h1>You can here add products</h1>
            <button onClick={onAddProduct}>Add Products</button>
            {addProduct ? (
                <AddProducts/>
            ):""}
        </div>
    );
};

export default About;