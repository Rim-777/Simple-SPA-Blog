import React from 'react';
import BlogItem from './BlogItem';


const BlogList = ({items, addLike}) => {

    return (
        <ul>
            {items.map(
                (item) =>(
                    <li style={{'listStyleType' :'none'}} key={item.metaData.id}>
                        <BlogItem item={item} addLike={addLike}/>
                    </li>)
            )
            }
        </ul>
    )

};

export default BlogList;