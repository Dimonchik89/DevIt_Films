import { createSelector } from "reselect";

const baseState = state => state.findReducer;

export const findResult = createSelector(baseState, state => state.findResult);
export const showFindCategory = createSelector(baseState, state => state.showFindCategory);