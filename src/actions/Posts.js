import * as types from 'constants/actionTypes/PostsActionTypes';

const fetchPostsRequest = () =>({
    type: types.FETCH_POSTS_REQUEST
});


export function fetchPosts(){
    return (dispatch) =>{
        dispatch(fetchPostsRequest())
    }
}


export const FETCH_POSTS_REQUEST = 'FETCH_POSTS_REQUEST';
export const FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS';
export const FETCH_POSTS_ERROR = 'FETCH_POSTS_ERROR';
