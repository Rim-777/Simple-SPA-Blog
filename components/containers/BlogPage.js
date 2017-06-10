import React, {Component} from 'react';
import BlogList from './BlogList.js';
import PieChart from '../ui/PieChart';


let items = [
    {
        metaData: {
            id: 1,
            author: {
                firstName: 'Timo',
                lastName: 'Moss'
            },
            timestamps: {
                createdAt: '2017-05-31T01:09:00+00:00',
                updatedAt: '2017-05-31T01:09:00+00:00'
            }
        },
        title: "The tattoo can have a mystical meaning",
        image: {
            src: 'http://res.cloudinary.com/dp29wtibh/image/upload/v1495305467/kdescji39olekozodulg.jpg',
            alt: 'some text',
            style: {width: '150px', height: 'auto'}
        },
        likes: 10
    },
    {
        metaData: {
            author: {
                firstName: 'Timo',
                lastName: 'Moss'
            }
        },
        title: "I like animals",
        image: {
            src: 'http://res.cloudinary.com/dp29wtibh/image/upload/v1495305250/h3xusb4q4ekcz2s8rdxd.jpg',
            alt: 'some text',
            style: {width: '150px', height: 'auto'}
        },
        likes: 10

    },
    {
        metaData: {
            author: {
                firstName: 'Timo',
                lastName: 'Moss'
            }
        },
        title: "Everybody likes mushrooms",
        image: {
            src: 'http://res.cloudinary.com/dp29wtibh/image/upload/v1495306175/yryjjstzkcnecsc49ssy.jpg',
            alt: 'some text',
            style: {width: '150px', height: 'auto'}
        },
        likes: 10
    }
];


class BlogPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {items}
    }

    addLike = (itemId) => {
        const updatedItems = this.state.items.map((item)=> {
            if (item.metaData.id === itemId) item.likes++;
            return item
        });

        this.setState({items: updatedItems})
    };


    render() {
        const {items} = this.state;
        return (
            <div className="blogPageContainer">
                <BlogList items={items} addLike={this.addLike}/>
                <PieChart columns={items.map((item)=>[item.title, item.likes])}/>
            </div>
        )
    }
}

export default BlogPage;



