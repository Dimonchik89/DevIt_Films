import React, { useState } from "react";
import { Box } from "@mui/system";
import { Container } from "@mui/material";
import MainTitle from "./MainTitle";
import MainFilmsContainer from "./MainFilmsContainer";
import MainPagination from "./MainPagination";
import "../../style/style.scss";

const Main = () => {
    const [moreFilms, setMoreFilms] = useState(1);
    const handleChangeMoreFilms = () => {
        setMoreFilms(moreFilms => moreFilms+1)
    }

    return (
        <Box>
            <Container maxWidth="xl">
                <MainTitle title="Что популярно"/>
            </Container>
            <MainFilmsContainer moreFilms={moreFilms}/>
            <MainPagination handleChangeMoreFilms={handleChangeMoreFilms}/>
        </Box>
    )
}
export default Main;