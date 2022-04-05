import React, {memo} from "react";
import { Typography, Box } from "@mui/material";
import { Link } from "react-router-dom";
import "../../../style/style.scss";

const FilmPageRecomendItem = memo(({film}) => {
    return (
        <Link to={`/${film.media_type}/${film.id}`}>
            <Box>
                <Box className="film-recomend__wrapper">
                    <Box className="film-recomend__img-wrapper">
                        <img src={`https://www.themoviedb.org/t/p/w250_and_h141_face${film.backdrop_path}`} alt={film.release_date} />
                        <Box className="film-recomend__info">

                        </Box>
                    </Box>
                    <Box className="flex space-beteen" sx={{mt: "1rem"}}>
                        <Typography
                            variant="body2"
                            component="span"
                        >
                            {film.title}
                        </Typography>
                        <Typography
                            variant="body2"
                            component="span"
                        >
                            {`${parseInt(film.vote_average * 10)}%`}
                        </Typography>
                    </Box>
                </Box>

            </Box>
        </Link>
    )
})
export default FilmPageRecomendItem;