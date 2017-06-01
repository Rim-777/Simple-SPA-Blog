import React from 'react';
import Author from './Author';
import TextBox from './TextBox';
import Image from './Image';
import Likes from './Likes';
import Timestamps from './Timestamps';


const BlogItem = (props)=>{
    const {content} = props;
    const {metaData, image} = content;

    return(
        <div id={metaData && metaData.id } className='blogItem' style={{border: "1px solid green"}}>
            <Author data={metaData.author}/>
            <TextBox title={content.title}/>
            <Image src={image && image.src}
                   alt={image &&image.alt}
                   style={image && image.style}
                /><br/>
            <Likes amount={content.likes}/>
            <Timestamps dateTime={metaData && metaData.timestamps}/>
            <br/>
        </div>
    )
};


BlogItem.propTypes = {
    content: React.PropTypes.shape({
        metaData: React.PropTypes.shape({
            id: React.PropTypes.number.isRequired,
            author:React.PropTypes.shape({
                firstName: React.PropTypes.string.isRequired,
                lastName: React.PropTypes.string.isRequired
            }),
            timestamps: React.PropTypes.shape({
                created_at: React.PropTypes.string,
                updated_at: React.PropTypes.string
            })
        }),
        title: React.PropTypes.string.isRequired,
        image:React.PropTypes.shape({
            src: React.PropTypes.string.isRequired,
            alt: React.PropTypes.string,
            style: React.PropTypes.shape({
                width: React.PropTypes.string.isRequired,
                height: React.PropTypes.string})
        })
    }).isRequired
};

export default BlogItem;




