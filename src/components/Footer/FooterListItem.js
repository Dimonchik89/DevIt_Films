import React from "react";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";
import "../../style/style.scss";

const FooterListItem = ({link}) => {
    return (
        <li>
            <Link
                className="color-white"
                to={link.link}>
                <Typography
                    variant="span"
                    component="span"
                >
                    {link.linkName}
                </Typography>
            </Link>
        </li>
    )
}
export default FooterListItem;