import React from "react";
import NavLink from "../NavLink/NavLink";
import { nanoid } from 'nanoid';
import { pages } from "./pages";
import "./header.scss";

const HeaderNavLinks = () => {
    const links = pages.map((page) => ( <NavLink key={nanoid()} item={page} textStyle="header-link__style"/>
    ))
    return (
        <>
            {links}
        </>
    )
}
export default HeaderNavLinks;
