import {createStore, compose, applyMiddleware} from 'redux';
import {createBrowserHistory} from 'history';
import {routerMiddleware} from 'connected-react-router';
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import createRootReducer from '../reducers';

export const history = createBrowserHistory();

const configureStore = initialState => {
    const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

    const store = createStore(
        createRootReducer(history),
        initialState,
        composeEnhancer(applyMiddleware(thunk, promise, routerMiddleware(history)))
    );

    return store;
};

export default configureStore;
