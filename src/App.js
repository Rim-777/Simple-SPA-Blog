import React from 'react';

import BlogPage from 'components/containers/BlogPage';
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
                <Route exact path="/" component={BlogPage}/>
                <Route exact path="/:pageNumber?" render={({match}) => (
                <BlogPage pageNumber={match.params.pageNumber}/>

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
