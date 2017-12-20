import Likes from 'components/ui/Likes'
import {connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {addLike} from 'actions/Like';
import getItem from 'helpers/getItem';

const actionToProps = (dispatch) => {
    return {
        addLike: bindActionCreators(addLike, dispatch)
    }
};

const stateToProps = (state, ownProps) => {
    const item = getItem(state, ownProps.itemId);
    return {
        amount: item.likes || 0,
        itemId: ownProps.itemId
    }
};

export default connect(stateToProps, actionToProps)(Likes);
