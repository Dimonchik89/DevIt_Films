import { useState } from "react";

export const useFavorite = () => {
    const [favorite, setFavorite] = useState(false);

    const handleAddFavorite = (film) => {
        const favoriteFilms = JSON?.parse(localStorage.getItem("favorite")) || [];
        if(favorite) {
            let newFavoriteFilms = favoriteFilms.filter(item => item.id !== film.id);
            localStorage.setItem("favorite", JSON.stringify(newFavoriteFilms))
        } else {
            favoriteFilms.push(film);
            localStorage.setItem("favorite", JSON.stringify(favoriteFilms));
        }
        setFavorite(favorite => !favorite)
    }
    return { handleAddFavorite };
}
