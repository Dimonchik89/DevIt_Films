import { handleActions } from "redux-actions";
import { fetchingFilmsMain, fetchingFilmsCategory, changePopularCategory, resetFilms, setTotalPage } from "./action";

const initialState = {
    loading: "idle",
    films: [],
    totalPage: 1,
    popularUrl: "/movie"
}
const filmsFetchingHandle = (state) => {
    return {
        ...state,
        loading: "loading"
    }
}
const filmsFetchedHandler = (state, action) => {
    return {
        ...state,
        loading: "idle",
        films: [...state.films, ...action.payload.data.results],
        totalPage: action.payload.data.total_pages
    }
}
const filmsFetchingErrorHandler = (state) => {
    return {
        ...state,
        loading: "error"
    }
}
const changePopularCategoryHandler = (state, action) => {
    return {
        ...state,
        popularUrl: action.payload,
        films: []
    }
}
const resetFilmsHandler = (state) => {
    return {
        ...state,
        films: []
    }
}
const setTotalPageHandler = (state, action) => {
    return {
        ...state,
        totalPage: action.payload
    }
}

export const popularMainReducer = handleActions({
    [fetchingFilmsMain]: filmsFetchingHandle,
    [fetchingFilmsMain.success]: filmsFetchedHandler,
    [fetchingFilmsMain.error]: filmsFetchingErrorHandler,
    [fetchingFilmsCategory]: filmsFetchingHandle,
    [fetchingFilmsCategory.success]: filmsFetchedHandler,
    [fetchingFilmsCategory.error]: filmsFetchingErrorHandler,
    [changePopularCategory]: changePopularCategoryHandler,
    [resetFilms]: resetFilmsHandler,
    [setTotalPage]: setTotalPageHandler
}, initialState)