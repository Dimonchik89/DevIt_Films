import React, { useState, useEffect } from "react";
import { Box, Button, Stack } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import useHttp from "../../../hooks/useHttp";
import ReviewItem from "../../Review/ReviewItem";
import { nanoid } from "nanoid";
import "../../Review/review.scss";

const FilmPageReviewBlock = () => {
    const [reviews, setReviews] = useState(null);
    const { getResponse } = useHttp();
    const { pathname } = useLocation();
    const navigate = useNavigate();
    useEffect(() => {
        getResponse(`${pathname}/reviews?`)
            .then(data => setReviews(data.results))
    }, [pathname])
    const reviewContnt = reviews?.map((review, i) => {
        if(i < 3) {
            return <ReviewItem key={nanoid()} review={review}/>
        }
    })
    if(reviews?.length) {
        return (
            <Box className="review-block">
                <Stack spacing={2}>
                    {reviewContnt}
                </Stack>
                <Box sx={{my: "2rem"}}>
                    <Button onClick={() => navigate("reviews", {state: {reviews: reviews}})} color="primary">К обсуждениям</Button>
                </Box>
            </Box>
        )
    }
    return (
        <>
        </>
    )
}
export default FilmPageReviewBlock;