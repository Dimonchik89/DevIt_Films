import React, {useEffect, useState, memo} from "react";
import { Box, ListItemButton, ListItemText, Typography } from "@mui/material";
import { changeShowFindCategory } from "../../store/find/findAction";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import "./ResultFindCategoryList.scss";

const ResultFindCategoryItem = memo(({title, quantity, activeBtn, handleChangeActiveButton}) => {
    const searchParams = decodeURIComponent(location.search.split(/[?=]/).splice(2))
    const dispatch = useDispatch()
    const activeClass = title[0] === activeBtn ? "active" : "";
    const handleChange = () => {
        dispatch(changeShowFindCategory(title[0]))
        handleChangeActiveButton(title[0])
    }
    return (
        <Link to={`/search/${title}?query=${searchParams}`}>
            <ListItemButton
                className={`result-list__item ${activeClass}`}
                onClick={handleChange}>
                <ListItemText>
                    <Typography
                        variant="body1"
                        component="span"
                        className="result-list__title"
                    >
                        {title}
                    </Typography>
                </ListItemText>
                <Box className="result-list__num">
                    <Typography
                        variant="body1"
                        component="span"
                    >
                        {quantity}
                    </Typography>
                </Box>
            </ListItemButton>
        </Link>

    )
})
export default ResultFindCategoryItem;