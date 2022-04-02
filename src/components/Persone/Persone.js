import React from "react";
import { Outlet } from "react-router-dom";
import { Box, Container, Typography } from "@mui/material";
import PersoneContent from "./PersoneContent";
import PaginationContainer from "../Pagination/PaginationContainer";
import { useChangeActive } from "../../hooks/useChange";
import { useSelector } from "react-redux";
import "./person.scss";

const Persone = () => {
    const { activeBtn, handleChangeActiveButton} = useChangeActive(1)
    const { totalPages } = useSelector(state => state.personReducer);
    return (
        <Container maxWidth="xl">
            <Box className="person">
                <Typography
                    variant="h3"
                    component="h3"
                >
                    Популярные люди
                </Typography>
                <Box className="person-wrapper">
                    <PersoneContent currentPage={activeBtn}/>
                </Box>
                <Box sx={{marginY: "20px"}}>
                    <PaginationContainer currentPage={activeBtn} totalPage={totalPages} handleChangeActiveButton={handleChangeActiveButton}/>
                </Box>
            </Box>
        </Container>
    )
}
export default Persone;