import { createSelector } from "reselect";

const baseState = state => state.popularMainReducer;

export const films = createSelector(baseState, state => state.films);
export const loading = createSelector(baseState, state => state.loading);
export const totalPage = createSelector(baseState, state => state.totalPage);
export const popularUrl = createSelector(baseState, state => state.popularUrl);