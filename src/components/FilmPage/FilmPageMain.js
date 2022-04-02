import React, { useEffect } from "react";
import { Box } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import useHttp from "../../hooks/useHttp";
import { filmFetching, filmFetched, filmFetchingError } from "../../store/singleFilm/filmAction";
import FilmPageIntro from "./FilmPageIntro";

const FilmPageMain = () => {
    const { getResponse } = useHttp();
    const location = useLocation();
    const dispatch = useDispatch();
    const { film } = useSelector(state => state.filmReducer)
    useEffect(() => {
        dispatch(filmFetching());
        getResponse(`${location.pathname}?language=ru-RU&`)
            .then(film => dispatch(filmFetched(film)))
            .catch(dispatch(filmFetchingError()))
    }, [])


    if(!film) {
        <span>Loading...</span>
    }

    return (
        <Box>
            <FilmPageIntro film={film}/>
        </Box>
    )
}
export default FilmPageMain;