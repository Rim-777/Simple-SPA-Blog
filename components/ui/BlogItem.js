import React from 'react';
import TextBox from './TextBox';
import Image from './Image';

const BlogItem = (props)=>(
    <div>
        <TextBox content={props.textBoxContent}/>
        <Image attr={props.imgAttr}/>
    </div>
);

export default BlogItem;


