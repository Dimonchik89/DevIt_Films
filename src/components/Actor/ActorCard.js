import React, {memo} from "react";
import { Box, Typography } from "@mui/material";
import "./actor.scss";

const ActorCard = memo(({actor}) => {
    const placeholder = "https://via.placeholder.com/138x175";
    const imgSrc = `https://www.themoviedb.org/t/p/w138_and_h175_face${actor.profile_path}`;
    const imgPath = actor.profile_path ? imgSrc : placeholder;

    return (
        <Box>
            <Box className="actor__card">
                <img src={imgPath} alt={actor.name}/>
                <Box className="actor__card-text">
                    <Typography
                        variant="h6"
                        component="h6"
                    >
                        {actor.name}
                    </Typography>
                    <Typography
                        variant="body2"
                        component="span"
                        className="actor__card-character"
                    >
                        {actor.character}
                    </Typography>
                </Box>
            </Box>
        </Box>
    )
})
export default ActorCard;