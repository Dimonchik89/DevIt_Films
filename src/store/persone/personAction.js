import { createAction } from "redux-actions";

const PERSON_FETCHING = "PERSON_FETCHING";
const PERSON_FETCHED = "PERSON_FETCHED";
const PERSON_FETCHING_ERROR = "PERSON_FETCHING_ERROR";
const SET_TOTAL_PAGES = "SET_TOTAL_PAGES";

export const personFetching = createAction(PERSON_FETCHING);
export const personFethced = createAction(PERSON_FETCHED);
export const personFetchingError = createAction(PERSON_FETCHING_ERROR);
export const setTotalPages = createAction(SET_TOTAL_PAGES);