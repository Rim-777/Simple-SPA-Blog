import React from 'react';

import {postsPath} from 'helpers/routes'
import PostPage from 'components/containers/PostPage';

const PostPageRoute = {
    exact: true,
    path: postsPath(),
    render: ({match}) => (
        <PostPage id={match.params.id}/>
    )
};

export default PostPageRoute;
