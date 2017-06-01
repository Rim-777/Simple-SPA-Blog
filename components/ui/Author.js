import React from 'react';


const Author = ({data}) =>(
    <span>
        {`Author: ${data && data.firstName} ${data && data.lastName}`}
    </span>
);

export default Author;

