import React from 'react';

import {postsPath} from 'helpers/routes'
//import PostPage from 'components/containers/PostPage';
import PostContainer from 'containers/PostContainer';
import {fetchPost} from 'actions/Post'

const PostPageRoute = {
    exact: true,
    path: postsPath(),
    component: PostContainer,
    //render: ({match}) => (
        //<PostPage id={match.params.id}/>
        //<PostContainer/>
    //),
    prepareData: (store, query, params)=>{
        console.log('PostPageRoute');
        store.dispatch(fetchPost(params.id))
    }
};

export default PostPageRoute;
