import {assign} from 'lodash';
import * as types from 'constants/actionTypes/PostsActionTypes';
import * as likeTypes from 'constants/actionTypes/LikeActionTypes';

const initialState = {
    isFetching: false,
    error: false,
    items: []
};

export default function(state = initialState, action = {}){
    switch(action.type){
        case types.FETCH_POSTS_REQUEST:
            return assign({}, initialState, {isFetching: true});
        case types.FETCH_POSTS_ERROR:
            return assign({}, initialState, {error: true});
        case types.FETCH_POSTS_SUCCESS:
            return assign({}, initialState, {items: action.response});
        case likeTypes.ADD_LIKE_SUCCESS:
            const updatedItems = state.items.map((item)=>{
                if(item.metaData.id == action.response.id){
                    return assign({}, item, { likes: action.response.likes })
                }else{
                    return item
                }});
            return assign({}, initialState, { items: updatedItems });

        default:
            return state;
    }
}
