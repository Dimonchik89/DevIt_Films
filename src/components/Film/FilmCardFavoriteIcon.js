import React, { useEffect, useState } from "react";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useChangeActive } from "../../hooks/useChange";
import SnackbarBlock from "../Snackbar/SnackbarBlock";
import { useFavorite } from "../../hooks/useFavorite";
import "./film.scss";

const FilmCardFavoriteIcon = ({film}) => {
    const {activeBtn, handleChangeActiveButton} = useChangeActive(false);
    const { handleAddFavorite } = useFavorite();

    return (
        <>
            <FavoriteBorderIcon className="film-card__icon" onClick={() => handleAddFavorite(film)}/>
            <SnackbarBlock open={activeBtn} handleChangeActiveButton={handleChangeActiveButton}/>
        </>
    )
}
export default FilmCardFavoriteIcon;