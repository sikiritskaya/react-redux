import getPostsApi from "../../api/posts";

export const GET_POSTS_SUCCESS = 'GET_POSTS_SUCCESS';
export const GET_POSTS_STARTED = 'GET_POSTS_STARTED';
export const GET_POSTS_FAILURE = 'GET_POSTS_FAILURE';

const getPosts = () => {
    return (dispatch)=>{
        dispatch(getPostsStarted());
       getPostsApi().then(response=>{
          dispatch(getPostsSuccess(response))
      })
      .catch((error) => dispatch(getPostsFailure(error.message)));
    }
};

const getPostsSuccess = (posts) => ({
    type: GET_POSTS_SUCCESS,
    posts
});

const getPostsStarted = () => ({
    type: GET_POSTS_STARTED
});

const getPostsFailure = (error) => ({
    type: GET_POSTS_FAILURE,
    payload: {
        error
    }
});

export default getPosts;