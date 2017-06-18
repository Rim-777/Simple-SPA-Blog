import React, {Component} from 'react';
import BlogList from './../ui/BlogList.js';
import items from '../../fixtures/items';

class BlogPage extends Component {
    constructor(props) {
        super(props);
        this.state = {items};
    }

    render() {
        const {items} = this.state;
        return (
            <div className="blogPageContainer">
                <BlogList items={items} addLike={this.addLike}/>
            </div>
        )
    }

    addLike = (itemId) =>{
        const updatedItems = this.state.items.map((item)=> {
            if (item.metaData.id === itemId) item.likes++;
            return item
        });

        this.setState({items: updatedItems})
    }


}

export default BlogPage;



