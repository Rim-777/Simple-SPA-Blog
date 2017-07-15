import React from 'react';

//import {pagesPath} from 'helpers/routes'
import {rootPath} from 'helpers/routes'
//import PostsPage from 'components/containers/PostsPage';
import PostsContainer from 'containers/PostsContainer'

import {fetchPosts} from 'actions/Posts'


const PostsRoute = {
    exact: true,
    path: rootPath(),
    component: PostsContainer,
    //render: ({match}) => (
    //    //<PostsPage pageNumber={match.params.pageNumber}/>
    //    <PostsContainer/>
    //),
    prepareData: (store) => {
        store.dispatch(fetchPosts())
    }
};

export default PostsRoute

