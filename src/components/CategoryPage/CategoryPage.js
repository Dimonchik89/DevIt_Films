import React, { useEffect } from "react";
import { Box, Container, Grid, CircularProgress } from "@mui/material";
import { useLocation } from "react-router-dom";
import { filmsFetching, filmsFetched, filmsFetchingError, resetFilms } from "../../store/popularMain/popularMainAction";
import { useDispatch , useSelector } from "react-redux";
import useHttp from "../../hooks/useHttp";
import CategoryPageContent from "./CategoryPageContent";
import CategoryPageFilter from "./CategoryPageFilter";

const CategoryPage = () => {
    return (
        <Container maxWidth="xl">
            <Grid container spacing={5}>
                <Grid item xl={3} md={3}>
                    <CategoryPageFilter/>
                </Grid>
                <Grid item xl={9} md={9}>
                    <CategoryPageContent/>
                </Grid>
            </Grid>
        </Container>
    )
}
export default CategoryPage;