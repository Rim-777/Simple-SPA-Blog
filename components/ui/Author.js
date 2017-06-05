import React from 'react';


const Author = ({firstName, lastName}) => {

    const fullName = (firstName || lastName ) ? `${firstName || ''} ${lastName || ''}` : 'Anonymous';

    return (
        <span>
            {`Author: ${fullName}`}
        </span>
    )
};


Author.propTypes = {
    firstName: React.PropTypes.string.isRequired,
    lastName: React.PropTypes.string.isRequired
};


export default Author;

