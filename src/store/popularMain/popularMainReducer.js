import { handleActions } from "redux-actions";
import { filmsFetching, filmsFetched, filmsFetchingError, changePopularCategory, resetFilms, setTotalPage } from "./popularMainAction";

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
        films: [...state.films, ...action.payload]
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
    [filmsFetching]: filmsFetchingHandle,
    [filmsFetched]: filmsFetchedHandler,
    [filmsFetchingError]: filmsFetchingErrorHandler,
    [changePopularCategory]: changePopularCategoryHandler,
    [resetFilms]: resetFilmsHandler,
    [setTotalPage]: setTotalPageHandler
}, initialState)