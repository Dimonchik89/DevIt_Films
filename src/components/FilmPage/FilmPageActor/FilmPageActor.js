import React, { useEffect, memo } from "react";
import { useParams } from "react-router-dom";
import Slider from "react-slick";
import { Box } from "@mui/material";
import ActorCard from "../../Actor/ActorCard";
import { nanoid } from "nanoid";
import { actors, fetchFilmActor } from "../../../store/singleFilm";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const FilmPageActor = memo(({fetchFilmActor, actors}) => {
    const { id } = useParams();
    useEffect(() => {
            fetchFilmActor(id)
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
})

const mapState = createStructuredSelector({
    actors,
})

const mapDispatch = {
    fetchFilmActor
}

export default connect(mapState, mapDispatch)(FilmPageActor);