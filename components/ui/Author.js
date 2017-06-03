import React from 'react';


const Author = ({firstName, lastName}) =>(
    <span>
        {`Author: ${firstName || ''} ${lastName || ''}`}
    </span>
);


Author.propTypes = {
    firstName: React.PropTypes.string.isRequired,
    lastName: React.PropTypes.string.isRequired
};


export default Author;

