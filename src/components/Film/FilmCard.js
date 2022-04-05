import React, {memo} from "react";
import { useSelector } from "react-redux";
import { Box } from "@mui/system";
import { Link, useLocation } from "react-router-dom";
import FilmCardPoster from "./FilmCardPoster";
import FilmCardRaiting from "./FilmCardRaiting";
import FilmCardName from "./FilmCardName";
import "../../style/style.scss";
import "./film.scss";

const FilmCard = memo(({film}) => {
    const location = useLocation();
    const parentUrl = location.pathname.split("/")[1]
    const { popularUrl } = useSelector(state => state.popularMainReducer)
    const categoryUrl = parentUrl ? `/${parentUrl}` : `${popularUrl}`
    return (
            <Box className="film-card">
                <Box className="film-container">
                    <Link to={`${categoryUrl}/${film.id}`}>
                        <FilmCardPoster film={film}/>
                    </Link>
                    <FilmCardRaiting raiting={film.vote_average}/>
                    <FilmCardName film={film}/>
                </Box>
            </Box>
    )
})
export default FilmCard;