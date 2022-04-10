import React from "react";
import { Container, Grid } from "@mui/material";
import CategoryPageContent from "./CategoryPageContent";
import CategoryPageFilter from "./CategoryPageFilter";

const CategoryPage = () => {
    return (
        <Container maxWidth="xl">
            <Grid container spacing={5}>
                <Grid item xl={3} md={3}>
                    <CategoryPageFilter/>
                </Grid>
                <Grid item xl={9} md={9}>
                    <CategoryPageContent/>
                </Grid>
            </Grid>
        </Container>
    )
}
export default CategoryPage;