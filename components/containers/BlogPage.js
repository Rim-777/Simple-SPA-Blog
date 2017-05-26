import React, {Component} from 'react';
import BlogList from './BlogList.js'

let items = [
    {
        textBoxContent: "The tattoo can have a mystical meaning",
        imgAttr: {
            src: 'http://res.cloudinary.com/dp29wtibh/image/upload/v1495305467/kdescji39olekozodulg.jpg',
            alt: 'some text',
            style: {width: '150px', height: 'auto'}
        }
    },
    {
        textBoxContent: "I like animals",
        imgAttr: {
            src: 'http://res.cloudinary.com/dp29wtibh/image/upload/v1495305250/h3xusb4q4ekcz2s8rdxd.jpg',
            alt: 'some text',
            style: {width: '150px', height: 'auto'}
        }
    },
    {
        textBoxContent: "Everybody likes mushrooms",
        imgAttr: {
            src: 'http://res.cloudinary.com/dp29wtibh/image/upload/v1495306175/yryjjstzkcnecsc49ssy.jpg',
            alt: 'some text',
            style: {width: '150px', height: 'auto'}
        }
    }
];

const BlogPage = ()=>(
    <div className="blogPageContainer">
        <BlogList items={items}/>
    </div>
);

export default BlogPage;
