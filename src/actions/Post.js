import * as types from 'constants/actionTypes/PostActionTypes';
import request from 'superagent';

import {API_ROOT} from 'constants/API';

const fetchPostRequest = (id) =>{
    console.log('fetchPostRequest', id);
    return {
    type: types.FETCH_POST_REQUEST,
    id
}};

const receivePost = (response) =>{
console.log('receivePost', response);
return {
    type: types.FETCH_POST_SUCCESS,
    response
}};

const errorPost = () => {
    console.log('errorPost');
   return {
        type: types.FETCH_POST_ERROR
    }
};

export function fetchPost(id) {

    return (dispatch) => {
        dispatch(fetchPostRequest(id));
        console.log('ID', id || 'НЕТУ');
        return request
            .get(`${API_ROOT}/posts/${id}`)
            .end((err, response)=> {
                console.log('RESPONSE:', response.body);
                err ? dispatch(errorPost()) :  dispatch(receivePost(response.body))
            }
        )
    };
}


