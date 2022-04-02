import { handleActions } from "redux-actions";
import { setFind, changeShowFindCategory } from "./findAction";

const initialState = {
    findResult: [],
    showFindCategory: "movie"
}
const setFindHandler = (state, action) => {
    return {
        ...state,
        findResult: action.payload
    }
}
const changeShowFindCategoryHandle = (state, action) => {
    return {
        ...state,
        showFindCategory: action.payload
    }
}

export const findReducer = handleActions({
    [setFind]: setFindHandler,
    [changeShowFindCategory]: changeShowFindCategoryHandle
}, initialState)