import reducer from '../reducer/reducer';
import { composeWithDevTools } from "redux-devtools-extension";
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from "redux-thunk";


// const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;

