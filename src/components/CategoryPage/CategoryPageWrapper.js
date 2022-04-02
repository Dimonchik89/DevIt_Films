import React from "react";
import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";

const CategoryPageWrapper = () => {
    return (
        <Box sx={{marginTop: "100px"}}>
            <Outlet/>
        </Box>
    )
}
export default CategoryPageWrapper;