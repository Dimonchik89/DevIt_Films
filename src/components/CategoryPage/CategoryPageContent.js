import React, { useEffect } from "react";
import { Box } from "@mui/material";
import FilmCard from "../Film/FilmCard";
import { filmsFetching, filmsFetched, filmsFetchingError, resetFilms, setTotalPage } from "../../store/popularMain/popularMainAction";
import { useDispatch , useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import useHttp from "../../hooks/useHttp";
import { nanoid } from "nanoid";
import { useChangeActive } from "../../hooks/useChange";
import PaginationContainer from "../Pagination/PaginationContainer";
import "./categoryPage.scss";

const CategoryPageContent = () => {
    const location = useLocation();
    const {activeBtn, handleChangeActiveButton} = useChangeActive(parseInt(location?.search.split("=")[1]) || 1)
    const { getResponse } = useHttp();
    const dispatch = useDispatch();
    const { films, totalPage } = useSelector(state => state.popularMainReducer);

    useEffect(() => {
        dispatch(resetFilms())
        dispatch(filmsFetching());
        getResponse(`${location.pathname}?page=${activeBtn}&`)
            .then(films => {
                dispatch(setTotalPage(films.total_pages))
                dispatch(filmsFetched(films.results))
            })
            .catch(dispatch(filmsFetchingError()))
    }, [location.pathname, activeBtn])
    const content = films?.map(film => <FilmCard key={nanoid()} film={film}/>)
    return (
        <Box>
            <Box className="category-page__content">
                {content}
            </Box>
            <PaginationContainer currentPage={activeBtn} totalPage={totalPage} handleChangeActiveButton={handleChangeActiveButton}/>
        </Box>

    )
}
export default CategoryPageContent;