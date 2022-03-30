import React, { useState, useEffect } from "react";
import { Box, CircularProgress } from "@mui/material";
import { useSelector } from "react-redux";
import ResultFindContentItem from "./ResultFindContentItem";
import "./resultFindContent.scss";

const ResultFindContet = () => {
    const [actualArr, setActualArr] = useState(null);
    const { showFindCategory, findResult } = useSelector(state => state.findReducer);
    useEffect(() => {
        findResult.forEach(item => {
            if(Object.keys(item)[0] === showFindCategory) {
                setActualArr(...Object.values(item))
            }
        })
    }, [showFindCategory, findResult])

    if(!actualArr) {
        return (
            <Box sx={{textAlign: "center"}}>
                <CircularProgress />
            </Box>
        )
    }

    const content = actualArr.forEach(film => <ResultFindContentItem film={film}/>)
    return (
        <>
            {content}
        </>
    )
}
export default ResultFindContet;