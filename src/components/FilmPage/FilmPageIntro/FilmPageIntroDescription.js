import React, {memo} from "react";
import { Box, Typography } from "@mui/material";
import FilmPageIntroHeader from "./FilmPageIntroHeader";
import FilmPageIntroFooter from "./FilmPageIntroFooter";
import ButtonCircle from "../../Button/ButtonCircle";
import { nanoid } from "nanoid";
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AddBoxIcon from '@mui/icons-material/AddBox';
import StarRateIcon from '@mui/icons-material/StarRate';
import { useFavorite } from "../../../hooks/useFavorite";
import "../../../style/style.scss";


const FilmPageIntroDescription = memo(({film}) => {
    const { handleAddFavorite } = useFavorite();
    const btnArr = [
        {title: "Добавить в список", icon: FormatListBulletedIcon, handleAdd: null},
        {title: "Добавить в избранное", icon: FavoriteIcon, handleAdd: handleAddFavorite},
        {title: "Добавить в свой список отслеживания", icon: AddBoxIcon, handleAdd: null},
        {title: "Оценить!", icon: StarRateIcon, handleAdd: null},
    ]
    const buttons = btnArr.map(button => <ButtonCircle key={nanoid()} title={button.title} Icon={button.icon} film={film} color="white" handleAdd={button.handleAdd}/>)

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
})
export default FilmPageIntroDescription;
//production_companies