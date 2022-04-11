import { createRequestAction } from "../createRequestAction";

const FILM_FETCHIND = "FILM_FETCHIND";
const FETCH_FILM_ACTOR = "FETCH_FILM_ACTOR";
const FETCH_FILM_MEDIA = "FETCH_FILM_MEDIA";
const FETCH_FILM_RECOMEND = "FETCH_FILM_RECOMEND";
const FETCH_FILM_REVIEW = "FETCH_FILM_REVIEW";

export const fetchingFilm = createRequestAction(FILM_FETCHIND, (pathname) => {
    return {
        request: {
            method: "GET",
            url: `${pathname}?language=ru-RU`
        }
    }
})

export const fetchFilmActor = createRequestAction(FETCH_FILM_ACTOR, (id) => {
    return {
        request: {
            method: "GET",
            url: `/movie/${id}/credits`
        }
    }
})

export const fetchFilmMedia = createRequestAction(FETCH_FILM_MEDIA, (pathname, url) => {
    return {
        request: {
            method: "GET",
            url: `/${pathname}${url}`
        }
    }
})

export const fetchFilmRecomend = createRequestAction(FETCH_FILM_RECOMEND, (pathname) => {
    return {
        request: {
            method: "GET",
            url: `${pathname}/recommendations?language=ru-RU&`
        }
    }
})

export const fetchFilmReview = createRequestAction(FETCH_FILM_REVIEW, (pathname) => {
    return {
        request: {
            method: "GET",
            url: `${pathname}/reviews`
        }
    }
})