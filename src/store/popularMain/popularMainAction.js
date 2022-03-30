import { createAction } from "redux-actions";

export const FILMS_FETCHING = "FILMS_FETCHING";
export const FILMS_FETCHED = "FILMS_FETCHED";
export const FILMS_FETCHING_ERROR = "FILMS_FETCHING_ERROR";
export const CHANGE_POPULAR_CATEGORY = "CHANGE_POPULAR_CATEGORY";

export const filmsFetching = createAction(FILMS_FETCHING);
export const filmsFetched = createAction(FILMS_FETCHED);
export const filmsFetchingError = createAction(FILMS_FETCHING_ERROR);
export const changePopularCategory = createAction(CHANGE_POPULAR_CATEGORY);
