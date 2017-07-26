import * as types from 'constants/actionTypes/LikeActionTypes';
import request from 'superagent';

import {API_ROOT} from 'constants/API';

const receiveLikes = (response) => {
    return {
        type: types.ADD_LIKE_SUCCESS,
        response
    }
};

const errorLikes = () => {
    return {
        type: types.ADD_LIKE_ERROR
    }
};

export const addLike = (id) => {
    return (dispatch) => {
        return request
            .put(`${API_ROOT}/likes/${id}`)
            .end((err, response)=> {
                err ? dispatch(errorLikes()) : dispatch(receiveLikes(response.body))
            })
    }
};