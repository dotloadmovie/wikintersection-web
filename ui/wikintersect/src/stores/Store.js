import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from '../reducers';
import {buildDefaultState} from "../config";

const defaultState = buildDefaultState();

const store = createStore(reducer, defaultState, applyMiddleware(thunk));

export default store;
