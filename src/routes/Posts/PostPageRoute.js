import React from 'react';
import {postsPath} from 'helpers/routes'
import PostContainer from 'containers/PostContainer';
import {fetchPost} from 'actions/Post'

const PostPageRoute = {
    exact: true,
    path: postsPath(),
    component: PostContainer,
    prepareData: (store, query, params)=>{
        console.log('PostPageRoute');
        store.dispatch(fetchPost(params.id))
    }
};

export default PostPageRoute;
