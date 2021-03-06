import * as types from 'constants/actionTypes/PostsActionTypes';
import request from 'superagent';
import {API_ROOT} from 'constants/API';

const fetchPostsRequest = () =>({
    type: types.FETCH_POSTS_REQUEST
});

const receivePosts = (response) =>({
    type: types.FETCH_POSTS_SUCCESS,
    response
});

const errorPosts = () => ({
    type: types.FETCH_POSTS_ERROR
});

export function fetchPosts() {
    return (dispatch) => {
        dispatch(fetchPostsRequest());

        return request
            .get(`${API_ROOT}/`)
            .end((err, response)=> {
              err ? dispatch(errorPosts()) :  dispatch(receivePosts(response.body))
            }
        )
    };
}
