import { handleActions } from "redux-actions"
import { personFetching, personFethced, personFetchingError, setTotalPages } from "./personAction"

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
        person: action.payload,
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
        totalPages: action.payload
    }
}

export const personReducer = handleActions({
    [personFetching]: personFetchingHandler,
    [personFethced]: personFethcedHandler,
    [personFetchingError]: personFetchingErrorHandler,
    [setTotalPages]: setTotalPagesHandler
}, initialState)