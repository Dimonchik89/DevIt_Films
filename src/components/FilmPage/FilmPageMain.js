import React, { useEffect, lazy, Suspense } from "react";
import { Box, Container } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import useHttp from "../../hooks/useHttp";
import { filmFetching, filmFetched, filmFetchingError } from "../../store/singleFilm/filmAction";
import FilmPageIntro from "./FilmPageIntro/FilmPageIntro";
import FilmPageActor from "./FilmPageActor/FilmPageActor";
import Spiner from "../Spiner/Spiner";
const FilmPageReviewBlock = lazy(() => import("./FilmPageReview/FilmPageReviewBlock"));
const FilmPageMedia = lazy(() => import("./FilmPageMedia/FilmPageMedia"));
const FilmPageRecomend = lazy(() => import("./FilmPageRecomend/FilmPageRecomend"));

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
    }, [location])

    if(!film) {
        <span>Loading...</span>
    }

    return (
        <Suspense fallback={<Spiner/>}>
            <Box>
                <FilmPageIntro film={film}/>
                <Container maxWidth="xl">
                    <FilmPageActor film={film}/>
                    <FilmPageReviewBlock/>
                    <FilmPageMedia/>
                    <FilmPageRecomend/>
                </Container>
            </Box>
        </Suspense>

    )
}
export default FilmPageMain;