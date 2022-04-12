import { createAction } from "redux-actions";
import { createRequestAction } from "../createRequestAction";

const FILMS_FETCHING = "FILMS_FETCHING";
const CHANGE_POPULAR_CATEGORY = "CHANGE_POPULAR_CATEGORY";
const RESET_FILMS = "RESET_FILMS";
const SET_TOTAL_PAGE = "SET_TOTAL_PAGE";

export const fetchingFilmsMain = createRequestAction(FILMS_FETCHING, (popularUrl, moreFilms) => {
    return {
        request: {
            method: "GET",
            url: `${popularUrl}/popular?language=ru-Ru&page=${moreFilms}`
        }
    }
})

export const fetchingFilmsCategory = createRequestAction(FILMS_FETCHING ,(pathname, activeBtn) => {
    return {
        request: {
            method: "GET",
            url: `${pathname}?page=${activeBtn}&`
        }
    }
})

export const changePopularCategory = createAction(CHANGE_POPULAR_CATEGORY);
export const resetFilms = createAction(RESET_FILMS);
export const setTotalPage = createAction(SET_TOTAL_PAGE)