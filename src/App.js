import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import MainLayout from 'components/layouts/MainLayout'
import './App.css'
import {BrowserRouter as Router, Route, Switch, Redirect, matchPath} from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import setRoutes from 'routes';
import RouteWithSubRoutes from 'helpers/routes/RouteWithSubRoutes';

import { identity } from 'lodash/util';
import { assign } from 'lodash/object';

import DevTools from 'containers/DevTools'


import { parse } from 'qs';

const history = createHistory();

const routes = setRoutes();

import {Provider} from  'react-redux';

import store from 'store';

import prepareData from 'helpers/prepareData';


const  listenParams = (location, action) => {
    const state = { location, params: {}, routes: [], query: {}};

    routes.some(route => {
        const match = matchPath(location.pathname, route);
        console.log('matchBefor', match);
        if (match) {
            console.log('matchAfter', match);
            state.routes.push(route);
            assign(state.params, match.params);
            assign(state.query, parse(location.search.substr(1)));
        }
        return match;
    });


    const withoutScroll = (location.state || {}).withoutScroll;
    const nonPush = action != 'PUSH';

    prepareData(store, state);
    store.subscribe(
        identity,
        identity,
        () => nonPush || withoutScroll || window.scrollTo(0,0)
    );
};

listenParams(window.location);


class App extends Component  {

    render(){

        history.listen(listenParams);

        return (
            <Provider store={store}>
                <Router history={history}>
                    <MainLayout>
                        <Switch>
                            {
                                routes.map((route, i)=> (
                                    <RouteWithSubRoutes key={i} {...route}/>
                                ))
                            }
                        </Switch>
                    </MainLayout>
                </Router>
            </Provider>
        )
    }
}


ReactDOM.render(
    <DevTools store={store}/>,
    document.getElementById('devtools')
);

export default App;
