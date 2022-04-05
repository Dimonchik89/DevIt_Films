import React from "react";
import { Box, Container, Typography } from "@mui/material";
import FilmCard from "../Film/FilmCard";
import { nanoid } from "nanoid";
import "../../style/style.scss";
import "./favorite.scss";

const Favorite = () => {
    const favoritArr = JSON.parse(localStorage.getItem("favorite"));
    const content = favoritArr?.map(film => <FilmCard key={nanoid()} film={film}/>);
    return (
        <Box className="favorite">
            <Container maxWidth="xl">
                <Box>
                    <Typography
                        variant="h3"
                        component="h2"
                        align="center"
                        className="bold"
                    >
                        Избранное
                    </Typography>
                </Box>
                <Box className="favorite-wrapper">
                    {content}
                </Box>
            </Container>
        </Box>
    )
}
export default Favorite;