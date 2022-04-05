import React, {memo} from "react";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { useChangeActive } from "../../hooks/useChange";
import SnackbarBlock from "../Snackbar/SnackbarBlock";
import { useFavorite } from "../../hooks/useFavorite";
import "./film.scss";

const FilmCardFavoriteIcon = memo(({film}) => {
    const {activeBtn, handleChangeActiveButton} = useChangeActive(false);
    const { handleAddFavorite } = useFavorite();
    const handleClick = () => {
        handleChangeActiveButton(!activeBtn)
        handleAddFavorite(film)
    }

    return (
        <>
            <FavoriteBorderIcon className="film-card__icon" onClick={handleClick}/>
            <SnackbarBlock open={activeBtn} handleChangeActiveButton={handleChangeActiveButton}/>
        </>
    )
})
export default FilmCardFavoriteIcon;