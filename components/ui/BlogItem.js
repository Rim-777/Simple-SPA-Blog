import React from 'react';
import TextBox from './TextBox';
import Image from './Image';


const BlogItem = ({content})=>(
    <div>
        <TextBox title={content.title}/>
        <Image src={content.image.src}
               alt={content.image.alt}
               style={content.image.style}
               />
    </div>
);

export default BlogItem;




