import React, { useEffect, memo } from "react";
import { Container, Grid } from "@mui/material";
import { useLocation } from "react-router-dom";
import { connect } from "react-redux";
import ResultFindCategoryList from "../ResultFindCategoryList/ResultFindCategoryList";
import ResultFindContet from "../ResultFindContent/ResultFindContent";
import { useContains } from "../../hooks/useContaine";
import { createStructuredSelector } from "reselect";
import { setFind, findResult, showFindCategory } from "../../store/find";
import "../Find/find.scss";

const FindPage = memo(({ setFind, findResult, showFindCategory }) => {
    const location = useLocation();
    const { hashMapReturn } = useContains();
    const searchParams = decodeURIComponent(location.search.split(/[?=]/).splice(2))

    useEffect(() => {
        setFind(searchParams)
    }, [])

    const searchResult = hashMapReturn(findResult);

    return (
        <div className="find-page">
            <Container maxWidth="xl">
                <Grid container spacing={5}>
                    <Grid item xl={3} lg={3}>
                        <ResultFindCategoryList newArr={searchResult}/>
                    </Grid>
                    <Grid item xl={9} lg={9}>
                        <ResultFindContet findResult={searchResult} showFindCategory={showFindCategory}/>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
})

const mapState = createStructuredSelector({
    findResult,
    showFindCategory
})

const mapDispatch = {
    setFind
}

export default connect(mapState, mapDispatch)(FindPage);