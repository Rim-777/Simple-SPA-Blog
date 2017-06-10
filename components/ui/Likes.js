import React, {Component} from 'react';


const Likes = ({addLike, itemId, amount}) =>{

    return(
        <div onClick={()=> addLike(itemId)}
             style={{border: "1px solid green",
             width: '70px',
             cursor: 'pointer'}}>
            {`likes: ${amount}`}
        </div>
    )
};


Likes.propTypes = {
    amount: React.PropTypes.number.isRequired
};

export default Likes;