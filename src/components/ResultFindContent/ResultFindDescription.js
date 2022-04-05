import React, {memo} from "react";
import { Box, Typography } from "@mui/material";

const ResultFindDescription = memo(({film}) => {
    return (
        <Box className="result-find__description">
            <Typography
                variant="h6"
                component="h6"
            >
                {film.name || film.title}
            </Typography>
            <Typography
                variant="body2"
                component="span"
            >
                {film.release_date || film.first_air_date}
            </Typography>
            <Box className="result-find__text">
                <Typography
                    variant="body1"
                    component="span"
                >
                    {film.overview || ""}
                </Typography>
            </Box>
        </Box>
    )
})
export default ResultFindDescription;