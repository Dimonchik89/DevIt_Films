import React, { useEffect } from "react";
import { Box, Button, Stack } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import ReviewItem from "../../Review/ReviewItem";
import { nanoid } from "nanoid";
import { fetchFilmReview, reviews } from "../../../store/singleFilm";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import "../../Review/review.scss";

const FilmPageReviewBlock = ({ fetchFilmReview, reviews }) => {
    const { pathname } = useLocation();
    const navigate = useNavigate();
    useEffect(() => {
        fetchFilmReview(pathname)
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

const mapState = createStructuredSelector({
    reviews
})

const mapDispatch = {
    fetchFilmReview
}

export default connect(mapState, mapDispatch)(FilmPageReviewBlock);