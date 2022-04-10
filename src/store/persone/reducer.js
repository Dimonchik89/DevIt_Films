import { handleActions } from "redux-actions"
import { fetchPersone, setTotalPages } from "./action"

const initialState = {
    person: [],
    totalPages: 1,
    loading: "idle"
}
const personFetchingHandler = (state) => {
    return {
        ...state,
        loading: "loading"
    }
}
const personFethcedHandler = (state, action) => {
    return {
        ...state,
        person: action.payload.data.results,
        totalPages: action.payload.data.total_pages,
        loading: "idle"
    }
}
const personFetchingErrorHandler = (state) => {
    return {
        ...state,
        loading: "error"
    }
}
const setTotalPagesHandler = (state, action) => {
    return {
        ...state,
        totalPages: action.payload.data.totalPages
    }
}

export const personReducer = handleActions({
    [fetchPersone]: personFetchingHandler,
    [fetchPersone.success]: personFethcedHandler,
    [fetchPersone.fail]: personFetchingErrorHandler,
    [setTotalPages]: setTotalPagesHandler
}, initialState)