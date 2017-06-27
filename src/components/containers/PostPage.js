import React, {Component} from 'react';
import PropTypes from 'prop-types';
import BlogItem from 'components/ui/BlogItem'
import request from 'superagent'


class PostPage extends Component {

    constructor(props) {
        super(props);
        this.state = {load: false};
        this.fetchPost = this.fetchPost.bind(this);
    }


    fetchPost() {

        request.get(`http://localhost:4001/posts/${this.props.id}`,
            {},
            (err, res)=>(
                this.setState({load: true, item: res.body})
            ));
    }


    componentDidMount() {
        this.fetchPost();
    }

    render() {
        return (
        this.state.load && <BlogItem item={this.state.item}/>)
    }
}


export default PostPage;


PostPage.propTypes = {
    id: PropTypes.string.isRequired
};