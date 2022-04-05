import React, {memo} from "react";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import "./film.scss";

const FilmCardRaiting = memo(({raiting}) => {
    return (
        <Box className="film-raiting__wrapper">
            <Box className="film-raiting">
                <Typography
                    variant="body2"
                    comsponent="span"
                    color="white"
                >
                    {`${raiting * 10}%`}
                </Typography>
            </Box>
        </Box>
    )
})
export default FilmCardRaiting;