import React from 'react';
import Button from 'react-mdl/lib/Button';


const Likes = ({addLike, itemId, amount}) =>{

    return(
        <Button onClick={()=> addLike(itemId)}
             style={{border: '1px solid green',
             width: 'auto',
             cursor: 'pointer'}}>
            {`likes: ${amount}`}
        </Button>
    )
};


Likes.propTypes = {
    amount: React.PropTypes.number.isRequired
};

export default Likes;