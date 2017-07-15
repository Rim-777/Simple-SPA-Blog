import React, {Component} from 'react';
import Paginator from 'components/containers/Paginator';
import request from 'superagent'
import BlogList from 'components/ui/BlogList';

class PostsPage extends Component {
    constructor(props) {
        super(props);

        this.state = {items: []};

        this.addLike = this.addLike.bind(this);
        this.fetchPosts = this.fetchPosts.bind(this);
    }


    render() {
        const {items} = this.state;
        return (
            <div className="blogPageContainer">
                <BlogList items={items} {...this.props} addLike={this.addLike}/>
            </div>
        )
    }


    addLike(itemId) {
        const updatedItems = this.state.items.map((item) => {
            if (item.metaData.id === itemId) item.likes++;
            return item
        });

        this.setState({items: updatedItems})
    }


    fetchPosts() {
        request.get('http://localhost:4001/',
            {},
            (err, res) => (
                    this.setState({items: res.body })
            ))
    }


    //componentDidMount() {
    //    this.fetchPosts();
    //}

}

export default PostsPage;
