import React, {useEffect } from "react";
import { Container, Grid } from "@mui/material";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import useHttp from "../../hooks/useHttp";
import ResultFindCategoryList from "../ResultFindCategoryList/ResultFindCategoryList";
import ResultPageContent from "../ResultFindContent/ResultFindContent";
import { useContains } from "../../hooks/useContaine";
import { setFind } from "../../store/find/findAction";
import "../Find/find.scss";

const FindPage = () => {
    const location = useLocation();
    const {getResponse} = useHttp();
    const dispatch = useDispatch();
    const {newArr, hashMap, hashMapReturn} = useContains();
    const searchParams = decodeURIComponent(location.search.split(/[?=]/).splice(2))

    useEffect(() => {
        getResponse(`/search/multi?query=${searchParams}&language=ru-Ru&`)
        .then(response => {
            dispatch(setFind(hashMapReturn(response.results)))
            hashMap(response.results)
        })
    }, [])

    return (
        <div className="find-page">
            <Container maxWidth="xl">
                <Grid container spacing={5}>
                    <Grid item xl={3} lg={3}>
                        <ResultFindCategoryList newArr={newArr}/>
                    </Grid>
                    <Grid item xl={9} lg={9}>
                        <ResultPageContent/>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}
export default FindPage;