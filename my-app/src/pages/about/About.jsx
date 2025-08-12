import React, {createContext, useContext, useState} from 'react';
import AddProducts from "../../component/products/AddProducts.jsx";
import "./About.scss"
import {Provider} from "react-redux";


export const Productcontext = createContext();
const About = () => {
    const [addProduct, setAddProduct] = useState(false)
    const onAddProduct = () => {
        setAddProduct(!addProduct)
    }
    return (
        <Productcontext.Provider value={{ addProduct, setAddProduct }}>
            <div className={"about"}>
                <h1>You can here add products</h1>
                <button onClick={onAddProduct} className={"btn"}>Add Products</button>
                {addProduct ? (
                    <AddProducts/>
                ):""}
            </div>
        </Productcontext.Provider>
    );
};

export default About;