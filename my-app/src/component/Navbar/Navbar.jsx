import React, {useState} from 'react';
import "./Navbar.scss"
import {Link} from "react-router-dom";
import Logo from "../../../public/images/Logo.svg"
import Search from "../../../public/images/search.png"
import Cart from "../../../public/images/Cart-Icon.png"
import {useDispatch, useSelector} from "react-redux";
import {selectCard, setSearchQuery} from "../../features/ProductSlice.js";
import ROUTES from "../../routes/routes.js";

const Navbar = () => {
    const [query, setQuery] = useState("")
    const card = useSelector(selectCard);
    const dispatch = useDispatch();
    const handleChange = (e) => {
        setQuery(e.target.value);
    }
    const searchQuery = (e) => {
        e.preventDefault();
        dispatch(setSearchQuery(query))
    }
    return (
        <div>
            <header>
                <nav>
                    <div className="logo">
                        <Link to={ROUTES.HOME}>
                            <img src={Logo} alt=""/>
                        </Link>
                    </div>
                    <ul>
                        <li><Link to={ROUTES.HOME}>Home</Link></li>
                        <li><Link to={ROUTES.ABOUT}>About</Link></li>
                        <li><Link to={ROUTES.SHOP}>Shop</Link></li>
                        <li><Link to={"#"}>Projects</Link></li>
                        <li><Link to={"#"}>News</Link></li>
                    </ul>
                </nav>
                <div className="search">
                    <form action="#" onSubmit={searchQuery}>
                        <input type="search" value={query} onChange={handleChange}/>
                        <button>
                            <img src={Search} alt=""/>
                        </button>
                    </form>
                    <div className="header-cart">
                        <span className="icon">
                            <img src={Cart} alt=""/>
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