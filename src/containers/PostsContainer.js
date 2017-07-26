import BlogList from 'components/ui/BlogList'
import {connect } from 'react-redux';
import { bindActionCreators } from 'redux';

const stateToProps = (state) => ({
    items: state.posts.items,
    isFetching: state.posts.isFetching,
    error: state.posts.error

});

export default  connect(stateToProps)(BlogList);
