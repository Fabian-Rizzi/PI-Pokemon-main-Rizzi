import reducers from '../reducers/reducers';
import { composeWithDevTools } from "redux-devtools-extension";
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from "redux-thunk";

export const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));

export default store;