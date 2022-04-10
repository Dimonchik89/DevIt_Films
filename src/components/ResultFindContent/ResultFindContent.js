import React, { useState, useEffect, memo } from "react";
import { Box, CircularProgress } from "@mui/material";
import ResultFindContentItem from "./ResultFindContentItem";
import { nanoid } from "nanoid";
import "./resultFindContent.scss";

const ResultFindContet = memo(({findResult, showFindCategory}) => {
    console.log(findResult)
    const [actualArr, setActualArr] = useState(null);
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

    const content = actualArr.map(film => <ResultFindContentItem key={nanoid()} film={film}/>)
    return (
        <Box className="result-find__content">
            {content}
        </Box>
    )
})


export default ResultFindContet;