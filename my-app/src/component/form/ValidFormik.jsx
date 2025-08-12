import React, {useContext} from 'react';
import "./ValidFormik.scss"
import {useDispatch, useSelector} from "react-redux";
import {addNewProduct} from "../../features/ProductSlice.js";
import {v4 as uuidv4} from 'uuid';
import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from 'yup';
import {Productcontext} from "../../pages/about/About.jsx";


const ValidFormik = () => {
    const { addProduct, setAddProduct }= useContext(Productcontext)

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
        setAddProduct(!addProduct)
    };
    return (
        <div className="modal-overlay">
            <div className="modal-container">
                <h2 className="modal-title">Add Product</h2>
                <Formik
                    onSubmit={onSubmit}
                    initialValues={initialValues}
                    validationSchema={validSchema}
                >
                    <Form className="modal-form">
                        <button onClick={()=>{setAddProduct(!addProduct)}} className={"btn-modal-close"}>x</button>
                        <div className="form-group">
                            <Field name="name" placeholder="Product Name" className="form-input" />
                            <ErrorMessage name="name" component="div" className="error-message" />
                        </div>

                        <div className="form-group">
                            <Field name="category" placeholder="Category" className="form-input" />
                            <ErrorMessage name="category" component="div" className="error-message" />
                        </div>

                        <div className="form-group">
                            <Field name="price" placeholder="Price" className="form-input" />
                            <ErrorMessage name="price" component="div" className="error-message" />
                        </div>

                        <button type="submit" className="submit-button">Add</button>
                    </Form>
                </Formik>
            </div>
        </div>
    );
};

export default ValidFormik;