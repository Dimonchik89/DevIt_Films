import React, {memo} from "react";
import { Box, List, Typography } from "@mui/material";
import ResultFindCategoryItem from "./ResultFindCategoryItem";
import { useChangeActive } from "../../hooks/useChange";
import { nanoid } from "nanoid";
import "./ResultFindCategoryList.scss";

const ResultFindCategoryList = memo(({newArr}) => {
    const {activeBtn, handleChangeActiveButton} = useChangeActive("movie");
    const listItemArr = newArr?.map((list, i) => {
        const listKeys = Object.keys(list)
        if(i === 0) {
            return (
                <ResultFindCategoryItem
                    key={nanoid()}
                    title={listKeys}
                    quantity={list[listKeys].length}
                    activeBtn={activeBtn}
                    handleChangeActiveButton={handleChangeActiveButton}/>
            )
        }
        return (
            <ResultFindCategoryItem
                key={nanoid()}
                title={listKeys}
                quantity={list[listKeys].length}
                activeBtn={activeBtn}
                handleChangeActiveButton={handleChangeActiveButton}/>
        )
    })

    return (
        <Box className="result-find__list">
            <Box className="result-find__title">
                <Typography
                    variant="h6"
                    component="h6"
                >
                    Результаты поиска
                </Typography>
            </Box>
            <List component="nav" aria-label="secondary mailbox folder" sx={{padding: 0}}>
                {listItemArr}
            </List>
        </Box>
    )
})
export default ResultFindCategoryList;