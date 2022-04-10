import { handleActions } from "redux-actions";
import { fetchingFilm } from "./action";

const initialState = {
    film: null,
    loading: "idle"
}

const filmFetchingHandler = (state) => {
    return {
        ...state,
        loading: "loading"
    }
}
const filmFetchedHandler = (state, action) => {
    return {
        ...state,
        film: action.payload.data,
        loading: "idle"
    }
}
const filmFetchingErrorHandler = (state) => {
    return {
        ...state,
        loading: "error"
    }
}

export const filmReducer = handleActions({
    [fetchingFilm]: filmFetchingHandler,
    [fetchingFilm.success]: filmFetchedHandler,
    [fetchingFilm.fail]: filmFetchingErrorHandler
}, initialState);