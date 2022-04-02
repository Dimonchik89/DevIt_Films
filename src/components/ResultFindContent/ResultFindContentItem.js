import React from "react";
import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import ResultFindDescription from "./ResultFindDescription";
import "./resultFindContent.scss";

const ResultFindContentItem = ({film}) => {
    return (
        <Box className="result-find__wrapper">
            <Box className="result-find__item">
                <Link to={`/${film.media_type}/${film.id}`} className="result-find__poster">
                    <img src={`https://www.themoviedb.org/t/p/w94_and_h141_bestv2${film.poster_path}`} alt="" />
                </Link>
                <ResultFindDescription film={film}/>
            </Box>
        </Box>
    )
}
export default ResultFindContentItem;