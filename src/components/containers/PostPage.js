import React from 'react';
import PropTypes from 'prop-types';
import BlogItem from 'components/ui/BlogItem'

const PostPage = (props) => {
    return (props.item && <BlogItem  {...props}/>)
};

export default PostPage;


PostPage.propTypes = {
    item: PropTypes.object
};