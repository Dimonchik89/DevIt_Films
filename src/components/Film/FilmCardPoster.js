import React, {memo} from "react";
import { Box } from "@mui/material";
import Spiner from "../Spiner/Spiner";
import "./film.scss";

const FilmCardPoster = memo(({film}) => {
    return (
        <Box className="film-poster__wrapper">
            <img className="film__poster" src={`https://www.themoviedb.org/t/p/w440_and_h660_bestv2${film.poster_path}`} alt={film.title || film.name} />
        </Box>
    )
})
export default FilmCardPoster;