import * as types from 'constants/actionTypes/PostActionTypes';
import request from 'superagent';

import {API_ROOT} from 'constants/API';

const fetchPostRequest = (id) => {
    return {
        type: types.FETCH_POST_REQUEST,
        id
    }
};

const receivePost = (response) => {
    return {
        type: types.FETCH_POST_SUCCESS,
        response
    }
};

const errorPost = () => {
    return {
        type: types.FETCH_POST_ERROR
    }
};


export const addLike = (id) => {
    return (dispatch) => {
        return request
            .put(`${API_ROOT}/likes/${id}/${false}`)
            .end((err, response)=> {
                err ? dispatch(errorPost()) : dispatch(receivePost(response.body))
            })
    }
};


export function fetchPost(id) {
    return (dispatch) => {
        dispatch(fetchPostRequest(id));
        return request
            .get(`${API_ROOT}/posts/${id}`)
            .end((err, response)=> {
                err ? dispatch(errorPost()) : dispatch(receivePost(response.body))
            }
        )
    };
}

