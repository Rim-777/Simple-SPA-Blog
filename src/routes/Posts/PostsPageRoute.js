import React from 'react';
import {rootPath} from 'helpers/routes'
import PostsContainer from 'containers/PostsContainer'
import {fetchPosts} from 'actions/Posts'

const PostsRoute = {
    exact: true,
    path: rootPath(),
    component: PostsContainer,

    prepareData: (store) => {
        store.dispatch(fetchPosts())
    }
};

export default PostsRoute
