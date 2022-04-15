import { handleActions } from "redux-actions";
import { setFind, changeShowFindCategory } from "./action";

const initialState = {
    findResult: [],
    showFindCategory: "movie"
}
const setFindHandler = (state, action) => {
    return {
        ...state,
        findResult: action.payload?.data?.results || []
    }
}
const changeShowFindCategoryHandle = (state, action) => {
    return {
        ...state,
        showFindCategory: action.payload
    }
}

export const findReducer = handleActions({
    [setFind.success]: setFindHandler,
    [changeShowFindCategory]: changeShowFindCategoryHandle
}, initialState)