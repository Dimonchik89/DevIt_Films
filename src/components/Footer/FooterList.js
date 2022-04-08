import React from "react";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";
import FooterListItem from "./FooterListItem";
import "../../style/style.scss";

const FooterList = ({list}) => {
    const listContent = list.links.map(link => <FooterListItem link={link}/>)
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
                {/* <li>
                    <Link>
                        <Typography
                            variant="span"
                            component="span"
                            className="uppercase"
                        >
                            Главное
                        </Typography>
                    </Link>
                    <span>О TMDB</span>
                </li>
                <li>
                    <span>Связаться с нами</span>
                </li>
                <li>
                    <span>Форумы поддержки</span>
                </li>
                <li>
                    <span>API</span>
                </li>
                <li>
                    <span>Статус системы</span>
                </li> */}
            </ul>
    )
}
export default FooterList;