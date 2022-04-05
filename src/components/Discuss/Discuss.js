import React, { useState, useEffect } from "react";
import { Box, Container, Stack } from "@mui/material";
import { useLocation } from "react-router-dom";
import useHttp from "../../hooks/useHttp";
import ReviewItem from "../Review/ReviewItem";
import "../Review/review.scss";

const Discuss = () => {
    const [posts, setPosts] = useState(null);
    const {pathname} = useLocation();
    const { getResponse } = useHttp();
    useEffect(() => {
        getResponse(`${pathname}?`)
            .then(data => setPosts(data.results))
    }, [])
    const content = posts?.map(review => <ReviewItem review={review}/>)
    return (
        <>
            <Box>
                <Container>
                    <Box className="review-block">
                        <Stack spacing={2}>
                            {content}
                        </Stack>
                    </Box>
                </Container>
            </Box>
        </>
    )
}
export default Discuss;