import { createStore, applyMiddleware } from "redux";
import reducer from "./reducer";
import multiClientMiddleware from "../middlewares/axios";
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(reducer, composeWithDevTools(applyMiddleware(multiClientMiddleware)))
export default store;