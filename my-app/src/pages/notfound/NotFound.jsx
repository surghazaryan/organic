import React from "react";
import "./NotFound.scss";
import flowerImg from "../../../public/images/Photo.png";
import pageNotFoundImg from "../../../public/images/Page not found.png";
import {Link, useNavigate} from "react-router-dom";
import ROUTES from "../../routes/routes.js";

const NotFound = () => {
    const navigate = useNavigate();
    return (
        <div
            className="notfound-container"
            style={{ backgroundImage: `url(${flowerImg})` }}
        >
            <div className="content">
                <img src={pageNotFoundImg} alt="Page not found" className="page-text" />
                <p className="description">
                    The page you are looking for doesn’t exist or has been moved.
                </p>
                <button className={"home-btn"}
                    onClick={() => {
                        if (window.location.pathname !== ROUTES.HOME) {
                            navigate(ROUTES.HOME);
                        } else {
                            window.location.reload();
                        }
                    }}
                >
                    Go Home
                </button>
            </div>
        </div>
    );
};

export default NotFound;
