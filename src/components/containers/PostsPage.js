import React, {Component} from 'react';
import BlogList from 'components/ui/BlogList.js';
import request from 'superagent'

class PostsPage extends Component {
    constructor(props) {
        super(props);
        this.state = {items: []};
        this.addLike = this.addLike.bind(this);
        this.fetchPosts = this.fetchPosts.bind(this);
        this._definePageData = this._definePageData.bind(this);
    }

    render() {
        const {items} = this.state;
        return (
            <div className="blogPageContainer">
                <BlogList items={this._definePageData(items)} addLike={this.addLike}/>
            </div>
        )
    }


    _definePageData(items) {
        const {pageNumber , step} = this.props;
        return items.slice(pageNumber * step - step, pageNumber * step)
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
                    this.setState({items: res.body})
            ))
    }


    componentDidMount() {
        this.fetchPosts();

        this.props.buttonsAmount(3)
    }
}

export default PostsPage;
