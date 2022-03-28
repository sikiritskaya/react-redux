import deletePostApi from "../../api/deletePost";

export const DELETE_POST_SUCCESS = "DELETE_POST_SUCCESS";
export const DELETE_POST_STARTED = "DELETE_POST_STARTED";
export const DELETE_POST_FAILURE = "DELETE_POST_FAILURE";

export const deletePost = (id) => {
  return (dispatch) => {
    dispatch(deletePostStarted());
    deletePostApi(id)
      .then(() => {
        dispatch(deletePostSuccess(id));
      })
      .catch((err) => {
        dispatch(deletePostFailure(err.message));
      });
  };
};

const deletePostSuccess = (id) => ({
  type: DELETE_POST_SUCCESS,
  id
});

const deletePostStarted = () => ({
  type: DELETE_POST_STARTED,
});

const deletePostFailure = (error) => ({
  type: DELETE_POST_FAILURE,
  payload: {
    error,
  },
});