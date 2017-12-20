import React from 'react';
import PropTypes from 'prop-types';
import { pick } from 'lodash/object';
import Container from './Container';
import Author from './Author';
import TextBox from './TextBox';
import Image from './Image';
import Timestamps from './Timestamps';
import Link from 'components/ui/Link';
import LikesContainer from 'containers/LikesContainer';
import { postsPath } from 'helpers/routes';

const BlogItem = ({item})=> {

    const {
        title,
        metaData: {
            id = 0,
            author: {firstName, lastName} = {},
            timestamps: { createdAt, updatedAt } = {},
            },
        image,
        } = item || {};

    return (
        <Container id={id}>
            <Author firstName={firstName} lastName={lastName}/>
            <Link to={postsPath(id)}><TextBox title={title}/></Link>
            <Image {...pick(image, ['src', 'width', 'style'])} />
            <LikesContainer  itemId={id}/>
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
