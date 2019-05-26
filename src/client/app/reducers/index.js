import {combineReducers} from 'redux';
import {connectRouter} from 'connected-react-router';
import productsState from './productsReducer';

const rootReducer = history => combineReducers({
    router: connectRouter(history),
    productsState
});

export default rootReducer;
