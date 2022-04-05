import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useHttp from "../../../hooks/useHttp";
import Slider from "react-slick";
import { Box, Container } from "@mui/material";
import ActorCard from "../../Actor/ActorCard";
import { nanoid } from "nanoid";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const FilmPageActor = () => {
    const [ actors, setActors ] = useState(null)
    const  { getResponse } = useHttp();
    const { id } = useParams();
    useEffect(() => {
        getResponse(`/movie/${id}/credits?`)
            .then(data => setActors(data.cast))
    }, [id])

    const settings = actors?.length > 8 ? {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 8,
        slidesToScroll: 8
    } : {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4
    };
    const allActors = actors?.map(actor => <ActorCard key={nanoid()} actor={actor}/>)

    return (
        <Box className="actor">
            <Slider {...settings}>
                {allActors}
            </Slider>
        </Box>
    )
}
export default FilmPageActor;