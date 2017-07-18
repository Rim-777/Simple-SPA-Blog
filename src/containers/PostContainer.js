import PostPage from 'components/containers/PostPage'
import {connect } from 'react-redux';

const stateToProps = (state) => {
    return {
        item: state.post.item,
        isFetching: state.post.isFetching,
        error: state.post.error

    }
};

export default connect(stateToProps)(PostPage);
