import { createSelector } from "reselect";

const baseState = state => state.filmReducer;
export const film = createSelector(baseState, state => state.film);
export const loading = createSelector(baseState, state => state.loading);