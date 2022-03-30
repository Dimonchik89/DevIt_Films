import { createAction } from "redux-actions";

export const SET_FIND = "SET_FIND";
export const CHANGE_SHOW_FIND_CATEGORY = "CHANGE_SHOW_FIND_CATEGORY";

export const setFind = createAction(SET_FIND);
export const changeShowFindCategory = createAction(CHANGE_SHOW_FIND_CATEGORY);