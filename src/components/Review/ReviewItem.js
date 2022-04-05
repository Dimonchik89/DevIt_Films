import React, {memo} from "react";
import { Avatar, Box, Typography } from "@mui/material";
import "../../style/style.scss";

const ReviewItem = memo(({review}) => {
    const date2 = new Date(review.created_at);
    const date = `${date2.getDate()}.${date2.getMonth()}.${date2.getFullYear()} в ${date2.getHours()}:${date2.getMinutes()}`
    const avatarPath = review.author_details.avatar_path?.replace(/\//, "");
    return (
        <Box className="review__item">
            <Avatar src={avatarPath} alt={review.author}/>
            <Box className="review__item-content-wrapper"  sx={{ml: "2rem"}}>
                <Typography
                    variant="body1"
                    component="span"
                    className="review__item-content"
                >
                    {review.content}
                </Typography>
            </Box>
            <Box sx={{ml: "2rem"}}>
                <Typography>
                    {review.author_details.rating || 0}
                </Typography>
            </Box>
            <Box className="review__item-info">
                <Typography
                    variant="body2"
                    component="p"
                    className="review__item-text"
                >
                    {review.author}
                </Typography>
                <Typography
                    variant="body2"
                    component="p"
                    className="review__item-text"
                >
                    {date}
                </Typography>
            </Box>
        </Box>
    )
})
export default ReviewItem;