import React from "react";
import { Box } from "@mui/system";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import FilmCardPoster from "./FilmCardPoster";
import FilmCardRaiting from "./FilmCardRaiting";
import FilmCardName from "./FilmCardName";
import "../../style/style.scss";
import "./film.scss";

const FilmCard = ({film}) => {
    const { popularUrl } = useSelector(state => state.popularMainReducer);

    return (
        // <Link to={`${popularUrl}/${film.id}`}>
            <Box className="film-card">
                <Box className="film-container">
                    <Link to={`${popularUrl}/${film.id}`}>
                        <FilmCardPoster film={film}/>
                    </Link>

                    <FilmCardRaiting raiting={film.vote_average}/>
                    <FilmCardName film={film}/>
                </Box>
            </Box>
        // {/* </Link> */}
    )
}
export default FilmCard;