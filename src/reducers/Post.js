import {assign} from 'lodash';
import * as types from 'constants/actionTypes/PostActionTypes';
import * as likeTypes from 'constants/actionTypes/LikeActionTypes';


const initialState = {
    isFetching: false,
    error: false,
    item: null
};


export default function(state = initialState, action = {}){
    switch(action.type){
        case types.FETCH_POST_REQUEST:
            return assign({}, initialState, {isFetching: true});
        case types.FETCH_POST_ERROR:
            return assign({}, initialState, {error: true});
        case types.FETCH_POST_SUCCESS:
            return assign({}, initialState, {item: action.response});
        case likeTypes.ADD_LIKE_ERROR:
            return assign({}, initialState, {error: true});
        case likeTypes.ADD_LIKE_SUCCESS:
            return assign({}, initialState, {
                item: assign({}, state.item, {likes: action.response.likes})
            });
        default:
            return state;
    }

}

