import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'
import { popularMainReducer } from "./popularMain/reducer";
import { findReducer } from "./find/findReducer";
import { filmReducer } from "./singleFilm/reducer";
import { personReducer } from "./persone/reducer";

const reducer = combineReducers({
    form: formReducer,
    popularMainReducer,
    findReducer,
    filmReducer,
    personReducer
})
export default reducer