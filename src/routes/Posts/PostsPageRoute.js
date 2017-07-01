import React from 'react';

import {pagesPath} from 'helpers/routes'
import PostsPage from 'components/containers/PostsPage';

const PostsRoute = {
    exact: true,
    path: pagesPath(),
    render: ({match}) => (
        <PostsPage pageNumber={match.params.pageNumber}/>
    )
};

export default PostsRoute

