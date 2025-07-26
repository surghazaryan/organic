import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {addNewProduct} from "../../features/ProductSlice.js";
import {v4 as uuidv4} from 'uuid';
import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from 'yup';

const ValidFormik = () => {
    const dispatch = useDispatch();
    const initialValues = {
        name: '',
        category: '',
        price: '',
    }
    const validSchema = Yup.object({
        name: Yup.string().required("name is required"),
        category:Yup.string().required("Category is required"),
        price:Yup.number().required("Price is required"),
    })
    const onSubmit = (values, {resetForm}) => {
        const product = {
            id: uuidv4(),
            name: values.name,
            category: values.category,
            price: values.price,
        };
        dispatch(addNewProduct(product));
        resetForm();
    };
    return (
        <div>
            <Formik onSubmit={onSubmit} initialValues={initialValues} validationSchema={validSchema}>
                <Form>
                    <Field name={"name"} placeholder={"Product Name"}/>
                    <ErrorMessage name="name"/>
                    <Field name={"category"} placeholder={"Category"}/>
                    <ErrorMessage name="category"/>
                    <Field name={"price"} placeholder={"Price"}/>
                    <ErrorMessage name="price"/>
                    <input type="submit" value="Add"/>
                </Form>
            </Formik>
        </div>
    );
};

export default ValidFormik;