import BlogList from 'components/ui/BlogList'
import {connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {addLike} from 'actions/Posts';


const actionToProps = (dispatch) => {
    return {
        addLike: bindActionCreators(addLike, dispatch)
    }
};


const stateToProps = (state) => ({
    items: state.posts.items,
    isFetching: state.posts.isFetching,
    error: state.posts.error

});


export default  connect(stateToProps, actionToProps)(BlogList);
