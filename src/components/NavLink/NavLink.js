import React from "react";
import { Button, Typography } from "@mui/material";
import HeaderSubMenu from "../Header/HeaderSubMenu";
import "../Header/header.scss";

const NavLink = ({item, textStyle}) => {
    return (
        <Button
            className={`header-nav__link ${textStyle}`}
            >
                <Typography
                    variant="h6"
                    component="h6"
                >
                    {item.page}
                </Typography>
            <HeaderSubMenu menu={item.menu}/>
        </Button>
    )
}
export default NavLink;