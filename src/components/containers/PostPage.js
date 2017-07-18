import React from 'react';
import PropTypes from 'prop-types';
import BlogItem from 'components/ui/BlogItem'

const PostPage = ({item}) => {
    return (item && <BlogItem item={item}/>)
};

export default PostPage;


PostPage.propTypes = {
    item: PropTypes.object
};