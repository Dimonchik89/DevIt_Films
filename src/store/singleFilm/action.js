import { createRequestAction } from "../createRequestAction";

const FILM_FETCHIND = "FILM_FETCHIND";

export const fetchingFilm = createRequestAction(FILM_FETCHIND, (pathname) => {
    return {
        request: {
            method: "GET",
            url: `${pathname}?language=ru-RU`
        }
    }
})