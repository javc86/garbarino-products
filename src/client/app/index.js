import React, {Component} from 'react';
import {Route, Switch} from 'react-router';
import {history} from 'connected-react-router';
import {withRouter} from "react-router-dom";
import {Helmet} from 'react-helmet';

import Header from './components/Header';
import Products from './screens/Products';
import ProductDetails from './screens/Products/Details';
import NotFound from './screens/NotFound';

class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Helmet>
                    <style>{'body {background-color: #f6f6f6;}'}</style>
                </Helmet>
                <Header/>
                <Switch>
                    <Route exact path="/" component={Products}/>
                    <Route path="/products" component={Products}/>
                    <Route path="/details/:id" component={ProductDetails}/>
                    <Route path="/notfound" component={NotFound}/>
                </Switch>
            </div>
        );
    }
}

export default withRouter(App);
