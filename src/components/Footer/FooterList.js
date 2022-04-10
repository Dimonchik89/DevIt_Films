import React from "react";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";
import FooterListItem from "./FooterListItem";
import { nanoid } from "nanoid";
import "../../style/style.scss";

const FooterList = ({list}) => {
    const listContent = list.links.map(link => <FooterListItem key={nanoid()} link={link}/>)
    return (
            <ul className="footer-list">
                <li>
                    <Typography
                        variant="h6"
                        component="h6"
                        className="uppercase color-white bold"
                    >
                        {list.title}
                    </Typography>
                </li>
                {listContent}
            </ul>
    )
}
export default FooterList;