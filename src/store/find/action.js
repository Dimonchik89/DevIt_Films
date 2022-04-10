import { createAction } from "redux-actions";
import { createRequestAction } from "../createRequestAction";

export const SET_FIND = "SET_FIND";
export const CHANGE_SHOW_FIND_CATEGORY = "CHANGE_SHOW_FIND_CATEGORY";

export const setFind = createRequestAction(SET_FIND, (searchParams) => {
    return {
        request: {
            method: "GET",
            url: `/search/multi?query=${searchParams}&language=ru-Ru`
        }
    }
})

// export const setFind = createAction(SET_FIND);
export const changeShowFindCategory = createAction(CHANGE_SHOW_FIND_CATEGORY);