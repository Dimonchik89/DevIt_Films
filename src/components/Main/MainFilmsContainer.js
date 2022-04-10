import React, { useEffect, memo } from "react";
import { Container } from "@mui/material";
import FilmCard from "../Film/FilmCard";
import { nanoid } from "nanoid";
import SkeletonPage from "../Skeleton/SkeletonPage";
import { useDispatch, connect } from "react-redux";
import { fetchingFilmsMain, resetFilms, films, popularUrl } from "../../store/popularMain";
import { createStructuredSelector } from "reselect";
import "./main.scss";

const MainFilmsContainer = memo(({moreFilms, fetchingFilmsMain, films, popularUrl}) => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(resetFilms())
    },[popularUrl])

    useEffect(() => {
        fetchingFilmsMain(popularUrl, moreFilms)
    }, [popularUrl, moreFilms])

    const filmsContent = films?.map(film => <FilmCard key={nanoid()} film={film}/>)

        if(films.length === 0) {
        return (
            <SkeletonPage/>
        )
    }

    return (
        <Container maxWidth="xl">
            <div className="main-films__container">
                {filmsContent}
            </div>
        </Container>

    )
})

const mapState = createStructuredSelector({
    films,
    popularUrl
})

const mapDispatch = {
    fetchingFilmsMain,
}

export default connect(mapState, mapDispatch)(MainFilmsContainer);