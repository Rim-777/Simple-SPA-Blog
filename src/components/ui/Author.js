import React from 'react';
import PropTypes from 'prop-types';

const Author = ({firstName, lastName}) => {

    const fullName = (firstName || lastName ) ? `${firstName || ''} ${lastName || ''}` : 'Anonymous';
    return (
        <span>
            {`Author: ${fullName}`}
        </span>
    )
};

Author.propTypes = {
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired
};

export default Author;
