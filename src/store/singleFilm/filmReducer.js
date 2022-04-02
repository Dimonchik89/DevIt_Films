import { handleActions } from "redux-actions";
import { filmFetching, filmFetched, filmFetchingError } from "./filmAction";

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
        film: action.payload,
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
    [filmFetching]: filmFetchingHandler,
    [filmFetched]: filmFetchedHandler,
    [filmFetchingError]: filmFetchingErrorHandler
}, initialState);