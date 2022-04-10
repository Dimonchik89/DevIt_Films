import React, { useEffect } from "react";
import { Box } from "@mui/material";
import FilmCard from "../Film/FilmCard";
import { fetchingFilmsCategory, resetFilms, films, totalPage } from "../../store/popularMain";
import { useDispatch, connect } from "react-redux";
import { useLocation } from "react-router-dom";
import useHttp from "../../hooks/useHttp";
import { nanoid } from "nanoid";
import { useChangeActive } from "../../hooks/useChange";
import PaginationContainer from "../Pagination/PaginationContainer";
import { createStructuredSelector } from "reselect";
import "./categoryPage.scss";

const CategoryPageContent = ({ fetchingFilmsCategory, resetFilms, films, totalPage }) => {
    const location = useLocation();
    const {activeBtn, handleChangeActiveButton} = useChangeActive(parseInt(location?.search.split("=")[1]) || 1)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(resetFilms())
        fetchingFilmsCategory(location.pathname, activeBtn)
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

const mapState = createStructuredSelector({
    films,
    totalPage,
})

const mapDispatch = {
    fetchingFilmsCategory,
    resetFilms,
}

export default connect(mapState, mapDispatch)(CategoryPageContent);