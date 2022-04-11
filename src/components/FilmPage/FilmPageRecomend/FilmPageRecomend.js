import React, { useEffect} from "react";
import { Box, Typography } from "@mui/material";
import { useLocation } from "react-router-dom";
import Slider from "react-slick";
import FilmPageRecomendItem from "./FilmPageRecomendItem";
import { fetchFilmRecomend, recomend } from "../../../store/singleFilm";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { nanoid } from "nanoid";
import "../filmPage.scss";

const FilmPageRecomend = ({ fetchFilmRecomend, recomend }) => {
    const { pathname } = useLocation();
    useEffect(() => {
        fetchFilmRecomend(pathname)
    }, [pathname])
    let setting;
    if(recomend?.length < 4) {
        setting = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: recomend?.length,
            slidesToScroll: recomend?.length
        }
    } else {
        setting = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 4
        }
    }
    const content = recomend?.map(film => <FilmPageRecomendItem key={nanoid()} film={film}/>)
    return (
        <>
            <Box className="film-page__recomend">
                <Box sx={{mb: "1rem"}}>
                    <Typography
                        variant="h4"
                        component="h4"
                    >
                        Рекомендации
                    </Typography>
                </Box>
                <Box>
                    <Slider {...setting}>
                        {content}
                    </Slider>
                </Box>
            </Box>
        </>
    )
}

const mapState = createStructuredSelector({
    recomend
})

const mapDispatch = {
    fetchFilmRecomend
}

export default connect(mapState, mapDispatch)(FilmPageRecomend);