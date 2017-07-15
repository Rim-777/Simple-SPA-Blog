import React from 'react';
import BlogItem from './BlogItem';

import { postsPath } from 'helpers/routes';

const BlogList = ({items, addLike}) => {

    return (
        <ul>
            {items.map(
                (item) =>(
                    <li style={{'listStyleType' :'none'}} key={item.metaData.id}>
                        <BlogItem item={item}  url={postsPath(+item.metaData.id)} addLike={addLike}/>
                    </li>)
            )
            }
        </ul>
    )

};

export default BlogList;