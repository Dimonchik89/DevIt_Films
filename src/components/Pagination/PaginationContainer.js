import React, {memo} from "react";
import { Box, Pagination, PaginationItem } from "@mui/material";
import { Link } from "react-router-dom";
import "./pagination.scss";

const PaginationContainer = memo(({currentPage, totalPage, handleChangeActiveButton}) => {
    return (
        <Box className="pagination">
            <Pagination
                page={currentPage}
                count={totalPage}
                onChange={(_, num) => handleChangeActiveButton(num)}
                showFirstButton
                showLastButton
                renderItem={(item) => (
                    <PaginationItem
                        component={Link}
                        to={`?page=${item.page}`}
                        {...item}
                    />
                )}
            />
        </Box>
    )
})
export default PaginationContainer;