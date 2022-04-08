import React, { useState, useEffect} from "react";
import { Box, Typography } from "@mui/material";
import { useLocation } from "react-router-dom";
import useHttp from "../../../hooks/useHttp";
import Slider from "react-slick";
import FilmPageRecomendItem from "./FilmPageRecomendItem";
import { nanoid } from "nanoid";
import "../filmPage.scss";

const FilmPageRecomend = () => {
    const [ films, setFilms ] = useState(null);
    const { getResponse } = useHttp();
    const { pathname } = useLocation();
    useEffect(() => {
        getResponse(`${pathname}/recommendations?language=ru-RU&`)
            .then(data => setFilms(data.results))
    }, [pathname])
    let setting;
    if(films?.length < 4) {
        setting = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: films?.length,
            slidesToScroll: films?.length
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
    const content = films?.map(film => <FilmPageRecomendItem key={nanoid()} film={film}/>)
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
export default FilmPageRecomend;