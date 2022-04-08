import React from "react";
import Header from "../Header/Header";
import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import { Box } from "@mui/material";

const Layout = () => {
    return (
        <Box sx={{display: "flex", flexDirection: "column", justifyContent: "space-between", minHeight: "100vh"}}>
            <Header/>
            <Outlet/>
            <Footer/>
        </Box>
    )
}
export default Layout;