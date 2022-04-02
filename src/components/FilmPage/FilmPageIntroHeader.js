import React from "react";
import { Box, Typography } from "@mui/material";

const FilmPageIntroHeader = ({film}) => {
    const ganres = film?.genres.map(item => item.name)

    return (
        <Box className="film-page__intro-header">
            <Typography
                variant="h3"
                component="h3"
                className="film-page__intro-title"
            >
                {film?.title}
            </Typography>
            <Box>
                <Typography
                    variant="body1"
                    component="span"
                    className="film-page__intro-subtitle"
                >
                    {film?.release_date}
                </Typography>

                <Typography
                    variant="body1"
                    component="span"
                    className="film-page__intro-subtitle"
                >
                    {ganres?.join(", ")}
                </Typography>
            </Box>
        </Box>
    )
}
export default FilmPageIntroHeader;