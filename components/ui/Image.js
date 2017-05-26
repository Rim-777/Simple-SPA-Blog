import React from 'react';

const Image = ({attr}) =>(
    <img src={attr.src} style={attr.style} alt={attr.alt}/>
);

export default Image;
