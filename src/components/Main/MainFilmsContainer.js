import React, { useEffect, memo } from "react";
import { Container } from "@mui/material";
import FilmCard from "../Film/FilmCard";
import { nanoid } from "nanoid";
import SkeletonPage from "../Skeleton/SkeletonPage";
import { useDispatch, useSelector } from "react-redux";
import { filmsFetching, filmsFetched, filmsFetchingError, resetFilms } from "../../store/popularMain/popularMainAction";
import useHttp from "../../hooks/useHttp";
import "./main.scss";

const MainFilmsContainer = memo(({moreFilms}) => {
    const {getResponse} = useHttp();
    const dispatch = useDispatch();
    const {loading, films, popularUrl} = useSelector(state => state.popularMainReducer)
    useEffect(() => {
        dispatch(resetFilms())
        dispatch(filmsFetching());
        getResponse(`${popularUrl}/popular?language=ru-Ru&page=${moreFilms}&`)
            .then(films => dispatch(filmsFetched(films.results)))
            .catch(dispatch(filmsFetchingError()))
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
export default MainFilmsContainer;