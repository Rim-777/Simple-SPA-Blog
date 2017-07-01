import React from 'react';
import MainLayout from 'components/layouts/MainLayout'
import './App.css'
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import setRoutes from 'routes';
import RouteWithSubRoutes from 'helpers/routes/RouteWithSubRoutes';

const history = createHistory();


const App = () =>{
        return (
            <Router history={history}>
                <MainLayout>
                    <Route exact path="/" render={() => (<Redirect to='/pages/1'/>)}/>
                    <Switch>
                        {
                            setRoutes().map((route, i)=> (
                                <RouteWithSubRoutes key={i} {...route}/>
                            ))
                        }
                    </Switch>
                </MainLayout>
            </Router>
        )
};

export default App;
