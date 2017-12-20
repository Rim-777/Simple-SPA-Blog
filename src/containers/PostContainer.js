import PostPage from 'components/containers/PostPage'
import {connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {addLike} from 'actions/Like';

const actionToProps = (dispatch) => {
    return {
        addLike: bindActionCreators(addLike, dispatch)
    }
};

const stateToProps = (state) => {
    return {
        item: state.post.item,
        isFetching: state.post.isFetching,
        error: state.post.error
    }
};

export default connect(stateToProps, actionToProps)(PostPage);
