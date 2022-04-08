import React from "react";
import { Box, Container, Typography } from "@mui/material";
import FooterList from "./FooterList";
import { footerListArr } from "./footerListArr";
import "../../style/style.scss";
import "./footer.scss";

const Footer = () => {
    const footerListContent = footerListArr.map(list => <FooterList list={list}/>)
    return (
        <footer>
            <Container maxWidth="xl">
                <Box className="flex">
                    <Box className="footer-logo__wrapper">
                        <img className="footer__logo" src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg" alt="logo" />
                    </Box>
                    <Box className="footer-list__container">
                        {footerListContent}
                    </Box>
                </Box>
            </Container>
        </footer>
    )
}
export default Footer;