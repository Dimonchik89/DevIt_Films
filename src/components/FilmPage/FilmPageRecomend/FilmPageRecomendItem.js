import React, {memo} from "react";
import { Typography, Box } from "@mui/material";
import { Link } from "react-router-dom";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import "../../../style/style.scss";

const FilmPageRecomendItem = memo(({film}) => {
    return (
            <Box>
                <Box className="film-recomend__wrapper">
                    <Box className="film-recomend__img-wrapper">
                        <Link to={`/${film.media_type}/${film.id}`}>
                            <img src={`https://www.themoviedb.org/t/p/w250_and_h141_face${film.backdrop_path}`} alt={film.release_date} />
                        </Link>
                        <Box className="film-recomend__info">
                            <CalendarMonthIcon/>
                            <Typography
                                variant="body2"
                                component="span"
                                sx={{ml: ".5rem"}}
                            >
                                {film.release_date || film.first_air_date}
                            </Typography>
                        </Box>
                    </Box>
                    <Box className="flex space-beteen" sx={{mt: "1rem"}}>
                        <Typography
                            variant="body2"
                            component="span"
                        >
                            {film.title || film.name}
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
    )
})
export default FilmPageRecomendItem;