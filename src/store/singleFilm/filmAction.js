import { createAction } from "redux-actions";

const FILM_FETCHIND = "FILM_FETCHIND";
const FILM_FETCHED = "FILM_FETCHED";
const FILM_FETCHING_ERROR = "FILM_FETCHING_ERROR";

export const filmFetching = createAction(FILM_FETCHIND);
export const filmFetched = createAction(FILM_FETCHED);
export const filmFetchingError = createAction(FILM_FETCHING_ERROR);