import React from 'react';


const Image = (props) =>(
    <img src={props.src} style={props.style} alt={props.alt}/>
);


Image.propTypes = {
        src: PropTypes.string.isRequired,
        alt: PropTypes.string,
        style: PropTypes.shape({
            width: PropTypes.string.isRequired,
            height: PropTypes.string
        })
};


export default Image;
