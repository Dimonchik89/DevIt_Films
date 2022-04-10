import { createAction } from "redux-actions";
import { createRequestAction } from "../createRequestAction";

const PERSON_FETCHING = "PERSON_FETCHING";
const SET_TOTAL_PAGES = "SET_TOTAL_PAGES";

export const fetchPersone = createRequestAction(PERSON_FETCHING, (pathname, currentPage) => {
    return {
        request: {
            method: "GET",
            url: `${pathname}/popular?language=ru-Ru&page=${currentPage}`
        }
    }
})

export const setTotalPages = createAction(SET_TOTAL_PAGES);