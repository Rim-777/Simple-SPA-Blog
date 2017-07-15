import {assign} from 'lodash';
import * as types from 'constants/actionTypes/PostActionTypes';


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
            console.log('POST_REDUCER:',  action.response);
            return assign({}, initialState, {item: action.response});
        default:
            return state;
    }

}

