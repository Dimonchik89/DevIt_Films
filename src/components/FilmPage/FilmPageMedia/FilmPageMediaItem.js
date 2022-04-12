import React, { memo } from "react";
import { Box } from "@mui/material";
import Slider from "react-slick";
import { nanoid } from "nanoid";
import "../filmPage.scss";

const FilmPageMediaItem = memo(({value, index, objectKey, src, media}) => {
    let setting;
    if(objectKey === "backdrops") {
        setting = {
            dots: true,
            infinite: true,
            speed: 300,
            slidesToShow: 2,
            slidesToScroll: 2
        }
    } else {
        setting = {
            dots: true,
            infinite: true,
            speed: 300,
            slidesToShow: 4,
            slidesToScroll: 4
        }
    }
    let content;

    if(!media) {
        return null
    }

    if(objectKey === "results") {
        // content = media?.map((item, i) => i < 20 ? <iframe width="560" height="315" src={`${item.src}${item?.file_path}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> : null)
    } else {
        content = media[objectKey]?.map((item, i) => i < 24 ? <img className="film-page__media-slide" key={nanoid()} src={`${src}${item?.file_path}`} alt="image"/> : null)
    }
    return (
        <>
            <div
                role="tabpanel"
                hidden={value !== index}
                id={`simple-tabpanel-${index}`}
                aria-labelledby={`simple-tab-${index}`}
                >
                {value === index && (
                    <Box sx={{ p: 3 }} className="film-page__slider-wrapper">
                        <Slider {...setting}>
                            {content}
                        </Slider>
                    </Box>
                )}
            </div>
        </>
    )
})

export default FilmPageMediaItem;