import React from 'react';
import "./Navbar.scss"
import {Link} from "react-router-dom";
import Logo from "../../../public/images/Logo.svg"
import Search from "../../../public/images/search.png"
import Cart from "../../../public/images/Cart-Icon.png"
import {useSelector} from "react-redux";
import {selectCard} from "../../features/ProductSlice.js";
import ROUTES from "../../routes/routes.js";

const Navbar = () => {
    const card = useSelector(selectCard);
    return (
        <div>
            <header>
                <nav>
                    <div className="logo">
                        <img src={Logo} alt=""/>
                    </div>
                    <ul>
                        <li><Link to={ROUTES.HOME}>Home</Link></li>
                        <li><Link to={ROUTES.ABOUT}>About</Link></li>
                        <li><Link to={"/"}>Pages</Link></li>
                        <li><Link to={"/"}>Shop</Link></li>
                        <li><Link to={"/"}>Projects</Link></li>
                        <li><Link to={"/"}>News</Link></li>
                    </ul>
                </nav>
                <div className="search">
                    <form action="#">
                        <input type="search" name="" id=""/>
                        <span>
                            <img src={Search} alt=""/>
                        </span>
                    </form>
                    <div className="header-cart">
                        <span className="icon">
                            <img src={Cart}alt=""/>
                        </span>
                       <Link to={ROUTES.CARD}>
                           <span>Cart({card.length})</span>
                       </Link>
                    </div>
                </div>
            </header>
        </div>
    );
};

export default Navbar;