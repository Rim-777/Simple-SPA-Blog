import React, {Component} from 'react';
import BlogList from 'components/ui/BlogList.js';
import request from 'superagent'

class PostsPage extends Component {
    constructor(props) {
        super(props);
        this.state = {items: [], limit: 3};
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
        const {pageNumber} = this.props;
        const {limit} = this.state;
        return items.slice(pageNumber * limit - limit, pageNumber * limit)
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
                    this.setState({items: res.body }),
        this.props.buttonsAmount( res.body.length % this.state.limit == 0 ? res.body.length / this.state.limit : parseInt(res.body.length / this.state.limit + 1) )
            ))
    }


    componentDidMount() {
        this.fetchPosts();
    }


}

export default PostsPage;
