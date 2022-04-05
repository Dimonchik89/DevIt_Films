import React, { memo } from "react";
import { Typography, Box } from "@mui/material";
import { Link } from "react-router-dom";
import "./person.scss";

const PersoneItem = memo(({actor}) => {
    let str = actor.known_for.map(item => item.title || item.name);
    return (
        <Box className="person-item">
            <Link to={`${actor.id}`}>
                <img src={`https://www.themoviedb.org/t/p/w470_and_h470_face/${actor.profile_path}`} alt={actor.name} />
            </Link>
            <Box className="person-item__description">
                <Typography
                    variant="h6"
                    component="h6"
                >
                    {actor.name}
                </Typography>
                <Typography
                    variant="body1"
                    component="p"
                    className="person-item__text"
                >
                    {str?.join(", ")}
                </Typography>
            </Box>
        </Box>
    )
})
export default PersoneItem;
