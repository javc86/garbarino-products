import React, {Component} from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {ConnectedRouter} from 'connected-react-router';
import "@babel/polyfill";

import App from './app';

import configureStore, {history} from './app/store/configureStore';

const store = configureStore({});

render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <App/>
        </ConnectedRouter>
    </Provider>,
    document.getElementById('app')
);
