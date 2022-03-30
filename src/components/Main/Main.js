import React, { useState, useEffect } from "react";
import useHttp from "../../hooks/useHttp";
import { useDispatch, useSelector } from "react-redux";
import { filmsFetching, filmsFetched, filmsFetchingError } from "../../store/popularMain/popularMainAction";
import { Box } from "@mui/system";
import { Container } from "@mui/material";
import MainTitle from "./MainTitle";
import MainFilmsContainer from "./MainFilmsContainer";
import MainPagination from "./MainPagination";
import SkeletonPage from "../Skeleton/SkeletonPage";
import "../../style/style.scss";

const Main = () => {
    const {getResponse} = useHttp();
    const dispatch = useDispatch();
    const [moreFilms, setMoreFilms] = useState(1);
    const {loading, films, popularUrl} = useSelector(state => state.popularMainReducer)

    const handleChangeMoreFilms = () => {
        setMoreFilms(moreFilms => moreFilms+1)
    }

    return (
        <Box>
            <Container maxWidth="xl">
                <MainTitle title="Что популярно"/>
            </Container>
            <MainFilmsContainer moreFilms={moreFilms}/>
            <MainPagination handleChangeMoreFilms={handleChangeMoreFilms}/>
        </Box>
    )
}
export default Main;