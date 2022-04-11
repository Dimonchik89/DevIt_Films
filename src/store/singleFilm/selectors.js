import { createSelector } from "reselect";

const baseState = state => state.filmReducer;
export const film = createSelector(baseState, state => state.film);
export const loading = createSelector(baseState, state => state.loading);
export const actors = createSelector(baseState, state => state.actors);
export const media = createSelector(baseState, state => state.media);
export const recomend = createSelector(baseState, state => state.recomend);
export const reviews = createSelector(baseState, state => state.reviews);