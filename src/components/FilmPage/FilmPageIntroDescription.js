import React, { useEffect } from "react";
import { Box, Typography } from "@mui/material";
import FilmPageIntroHeader from "./FilmPageIntroHeader";
import FilmPageIntroFooter from "./FilmPageIntroFooter";
import ButtonCircle from "../Button/ButtonCircle";
import { nanoid } from "nanoid";

import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AddBoxIcon from '@mui/icons-material/AddBox';
import StarRateIcon from '@mui/icons-material/StarRate';

import "../../style/style.scss";

const btnArr = [
    {title: "Добавить в список", icon: FormatListBulletedIcon},
    {title: "Добавить в избранное", icon: FavoriteIcon},
    {title: "Добавить в свой список отслеживания", icon: AddBoxIcon},
    {title: "Оценить!", icon: StarRateIcon},
]

const FilmPageIntroDescription = ({film}) => {

    const buttons = btnArr.map(button => <ButtonCircle key={nanoid()} title={button.title} Icon={button.icon} color="white"/>)

    return (
        <Box className="film-page__intro-description">
            <FilmPageIntroHeader film={film}/>
            <Box className="flex align-center">
                <Box className="film-page__intro-raiting">
                    {`${film?.vote_average*10}%`}

                </Box>
                <Box sx={{ml: "1rem"}}>
                    <Typography
                        variant="body1"
                        component="h6"
                    >
                        Пользовательский
                    </Typography>
                    <Typography
                        variant="body1"
                        component="h6"
                    >
                        счёт
                    </Typography>
                </Box>
                <Box className="flex" >
                    {buttons}
                </Box>
            </Box>
            <Box>
                <Typography
                    variant="h5"
                    component="h5"
                    sx={{fontStyle: "italic"}}
                >
                    {film?.tagline}
                </Typography>
            </Box>
            <FilmPageIntroFooter film={film}/>
        </Box>
    )
}
export default FilmPageIntroDescription;
//production_companies