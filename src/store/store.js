import { createStore, combineReducers } from "redux";
import { reducer as formReducer } from 'redux-form'
import { popularMainReducer } from "./popularMain/popularMainReducer";
import { findReducer } from "./find/findReducer";
import { filmReducer } from "./singleFilm/filmReducer";
import { personReducer } from "./persone/personReducer";

const store = createStore(combineReducers({form: formReducer, popularMainReducer, findReducer, filmReducer, personReducer}), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
export default store;