import React from 'react';
import PropTypes from 'prop-types';
import Container from './Container';
import Author from './Author';
import TextBox from './TextBox';
import Image from './Image';
import Likes from './Likes';
import Timestamps from './Timestamps';
import { pick } from 'lodash/object';


const BlogItem = ({item, addLike})=> {

    const {
        title,
        metaData: {
            id = 0,
            author: {firstName, lastName} = {},
            timestamps: { createdAt, updatedAt } = {},
            },
        image,
        likes
        } = item || {};

    return (
        <Container id={id}>
            <Author firstName={firstName} lastName={lastName}/>
            <TextBox title={title}/>
            <Image {...pick(image, ['src', 'width', 'style'])} />
            <Likes amount={likes} addLike={addLike} itemId={id}/>
            <Timestamps createdAt={createdAt} updatedAt={updatedAt}/>

            <br/>
        </Container>
    )
};


BlogItem.propTypes = {
    item: PropTypes.shape({
        metaData: PropTypes.shape({
            id: PropTypes.number.isRequired,
            author: PropTypes.shape(Author.propTypes),
            timestamps: PropTypes.shape(Timestamps.propTypes)
        }),
        title: PropTypes.string.isRequired,
        image: PropTypes.shape(Image.propTypes).isRequired
    }).isRequired
};

export default BlogItem;




