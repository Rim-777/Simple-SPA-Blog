import BlogItem from 'components/ui/BlogItem'
import {connect } from 'react-redux';

const stateToProps = (state) => {
    console.log('PostContainer, stateToProps', 'state', state);
    return {
        item: state.post.item,
        isFetching: state.post.isFetching,
        error: state.post.error

    }
};

export default connect(stateToProps)(BlogItem);
