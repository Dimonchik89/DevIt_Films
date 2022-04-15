import { handleActions } from "redux-actions";
import { fetchingFilm, fetchFilmActor, fetchFilmMedia, fetchFilmRecomend, fetchFilmReview } from "./action";

const initialState = {
    film: null,
    actors: null,
    media: null,
    recomend: null,
    reviews: null,
    loading: false,
    error: false
}

const filmFetchingHandler = (state) => {
    return {
        ...state,
        loading: true
    }
}
const filmFetchedHandler = (state, action) => {
    return {
        ...state,
        film: action.payload?.data || [],
        loading: false
    }
}
const filmFetchingErrorHandler = (state) => {
    return {
        ...state,
        loading: false,
        error: true
    }
}

const fetchedFilmActorHandler = (state, action) => {
    return {
        ...state,
        actors: action.payload?.data?.cast || [],
        loading: false
    }
}

const fetchedFilmMediaHandler = (state, action) => {
    return {
        ...state,
        media: action.payload?.data || [],
        loading: false
    }
}

const fetchFilmRecomendHandler = (state, action) => {
    return {
        ...state,
        recomend: action.payload?.data?.results || []
    }
}

const fetchFilmReviewHandler = (state, action) => {
    return {
        ...state,
        reviews: action.payload?.data?.results || []
    }
}

export const filmReducer = handleActions({
    [fetchingFilm]: filmFetchingHandler,
    [fetchingFilm.success]: filmFetchedHandler,
    [fetchingFilm.fail]: filmFetchingErrorHandler,
    [fetchFilmActor.success]: fetchedFilmActorHandler,
    [fetchFilmMedia.success]: fetchedFilmMediaHandler,
    [fetchFilmRecomend.success]: fetchFilmRecomendHandler,
    [fetchFilmReview.success]: fetchFilmReviewHandler,
}, initialState);