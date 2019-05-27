import {createStore, applyMiddleware} from 'redux';
import {createBrowserHistory} from 'history';
import {routerMiddleware} from 'connected-react-router';
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import createRootReducer from '../reducers';

export const history = createBrowserHistory();

const configureStore = initialState => {
    const store = createStore(
        createRootReducer(history),
        initialState,
        applyMiddleware(thunk, promise, routerMiddleware(history))
    );

    return store;
};

export default configureStore;
