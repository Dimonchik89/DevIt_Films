import React from "react";
import Skeleton from '@mui/material/Skeleton';
import { Box, Container } from "@mui/material";
import { nanoid } from "nanoid";
import "./skeleton.scss";

const SkeletonPage = () => {
    const skeletonPage = []
    for(let i = 0; i < 15; i++) {
        skeletonPage.push(
        <Box className="skeleton__item" key={nanoid()}>
            <Skeleton variant="rectangular" width={210} height={210} />
            <Skeleton variant="circular" width={40} height={40} />
            <Skeleton variant="text" width={210}/>
            <Skeleton variant="text" width={210}/>
        </Box>)
    }

    return (
        <Container>
            <Box className="skeleton">
                {skeletonPage}
            </Box>
        </Container>
    )
}
export default SkeletonPage;