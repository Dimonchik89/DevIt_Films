import React from "react";
import { Box, Typography } from "@mui/material";


const FilmCardName = ({film}) => {
    return (
        <Box className="film-text__wrapper">
            <Typography
                variant="h6"
                component="h6"
                className="bold"
            >
                {film.title || film.name}
            </Typography>
            <Typography
                variant="body1"
                component="span"
            >
                {film.release_date || film.first_air_date}
            </Typography>
        </Box>
    )
}
export default FilmCardName;