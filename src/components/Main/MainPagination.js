import React from "react";
import { Box, Container, Button, Typography } from "@mui/material";
import "./main.scss";

const MainPagination = ({handleChangeMoreFilms}) => {
    return (
        <Container
            maxWidth="xl"
        >
            <Box className="main-pagination__wrapper">
                <Button
                    variant="contained"
                    onClick={handleChangeMoreFilms}
                    color="secondary"
                    sx={{width: "100%"}}>
                    <Typography
                        variant="h6"
                        component="h6"
                        color="white"
                    >
                        More films
                    </Typography>
                </Button>
                {/* <Pagination
                    count={totalPage}
                    page={activeBtn}
                    onChange={(_, num) => handleChangeActiveButton(num)}
                    showFirstButton
                    showLastButton
                    className="main-pagination"
                /> */}
            </Box>
        </Container>
    )
}
export default MainPagination;