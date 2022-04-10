import React, { useEffect, lazy, Suspense } from "react";
import { Box, Container } from "@mui/material";
import { connect } from "react-redux";
import { useLocation } from "react-router-dom";
import  { fetchingFilm, film, loading } from "../../store/singleFilm";
import FilmPageIntro from "./FilmPageIntro/FilmPageIntro";
import FilmPageActor from "./FilmPageActor/FilmPageActor";
import Spiner from "../Spiner/Spiner";
import { createStructuredSelector } from "reselect";
const FilmPageReviewBlock = lazy(() => import("./FilmPageReview/FilmPageReviewBlock"));
const FilmPageMedia = lazy(() => import("./FilmPageMedia/FilmPageMedia"));
const FilmPageRecomend = lazy(() => import("./FilmPageRecomend/FilmPageRecomend"));

const FilmPageMain = ({ fetchingFilm, film }) => {
    const location = useLocation();
    useEffect(() => {
        fetchingFilm(location.pathname)
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

const mapState = createStructuredSelector({
    film,
    loading
})

const mapDispatch = {
    fetchingFilm
}

export default connect(mapState, mapDispatch)(FilmPageMain);