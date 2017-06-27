import React from 'react';

import Paginator from 'components/containers/Paginator';
import PostsPage from 'components/containers/PostsPage';
import PostPage from 'components/containers/PostPage';
import AboutPage from 'components/containers/AboutPage';
import MainLayout from 'components/layouts/MainLayout'
import './App.css'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';


const history = createHistory();

const App = () => (
    <Router history={history}>
        <MainLayout>
            <Switch>
                <Route exact path="/" component={PostsPage}/>
                <Route exact path="/page/:pageNumber" render={({match}) => (
                <Paginator pageNumber={match.params.pageNumber}/>

                )} />
                <Route exact path="/posts/:id" render={({match}) => (
                <PostPage id={match.params.id} />
              )} />
                <Route  exact path='/about' component={AboutPage}/>

            </Switch>
        </MainLayout>
    </Router>

);

export default App;
