import React from 'react';
import Navbar from "../Navbar/Navbar.jsx";
import {Outlet} from "react-router-dom";

const Layouts = () => {
    return (
        <div>
            <Navbar/>
            <Outlet/>
        </div>
    );
};

export default Layouts;