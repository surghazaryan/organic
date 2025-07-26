import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {addNewProduct} from "../../features/ProductSlice.js";
import {v4 as uuidv4} from 'uuid';
import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from 'yup';
import ValidFormik from "../form/ValidFormik.jsx";


const AddProducts = () => {
    // const dispatch = useDispatch();

    // const onSubmit = (e) => {
    //     e.preventDefault();
    //     const form = e.target;
    //     const product = {
    //         id: uuidv4(),
    //         name: form.name.value,
    //         category: form.category.value,
    //         price: form.price.value,
    //     };
    //     dispatch(addNewProduct(product))
    // }


    return (
        <div>
            {/*<form action="#" onSubmit={onSubmit}>*/}
            {/*    <input type="text" placeholder={"name"} name={"name"}/>*/}
            {/*    <input type="text" placeholder={"category"} name={"category"}/>*/}
            {/*    <input type="text" placeholder={"price"} name={"price"}/>*/}
            {/*    <button>Add</button>*/}
            {/*</form>*/}
            <ValidFormik/>
        </div>
    );
};

export default AddProducts;