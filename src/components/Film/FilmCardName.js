import React, {memo} from "react";
import { Box, Typography } from "@mui/material";
import FilmCardFavoriteIcon from "./FilmCardFavoriteIcon";

const FilmCardName = memo(({film}) => {
    return (
        <Box className="film-text__wrapper">
            <Box className="film-text__container">
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
            <FilmCardFavoriteIcon film={film}/>
        </Box>
    )
})
export default FilmCardName;