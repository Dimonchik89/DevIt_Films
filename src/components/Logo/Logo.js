import React from "react";
import { Link } from "react-router-dom"
import "./logo.scss";

const Logo = () => {
    return (
        <Link className="logo" to="/">
            <img src="../../img/logo.svg" alt="logo"/>
        </Link>
    )
}
export default Logo;