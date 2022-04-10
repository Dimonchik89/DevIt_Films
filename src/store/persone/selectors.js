import { createSelector } from "reselect";

const baseState = state => state.personReducer;
export const person = createSelector(baseState, state => state.person);
export const totalPages = createSelector(baseState, state => state.totalPages);
export const loading = createSelector(baseState, state => state.loading);