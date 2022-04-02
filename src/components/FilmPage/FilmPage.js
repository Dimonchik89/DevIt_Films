import React from "react";
import { Box, Container } from "@mui/material";
import { Outlet } from "react-router-dom";
import FilmPageNav from "./FilmPageNav";
import "./filmPage.scss";

const FilmPage = () => {
    return (
        <>
            <Container maxWidth="xl">
                <Box className="film-page">
                    <FilmPageNav/>
                </Box>
            </Container>
            <Outlet/>
        </>
    )
}
export default FilmPage;