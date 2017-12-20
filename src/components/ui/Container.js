import React from 'react';

const Container = ({children, id}) => (
    <div id={id}
         className='blogItem'
         style={{ border: '1px solid green' }}
        >
        {children}
    </div>
);

export default Container;
