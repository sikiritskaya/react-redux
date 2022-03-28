import getUsersApi from "../../api/users";

export const GET_USERS_SUCCESS = 'GET_USERS_SUCCESS';
export const GET_USERS_STARTED = 'GET_USERS_STARTED';
export const GET_USERS_FAILURE = 'GET_USERS_FAILURE';

const getUsers = () => {
    return (dispatch)=>{
        dispatch(getUsersStarted());
        getUsersApi().then(response=>{
          dispatch(getUsersSuccess(response))
        })
        .catch((error) => dispatch(getUsersFailure(error.message)));
    }
};

const getUsersSuccess = (users) => ({
    type: GET_USERS_SUCCESS,
    users
});

const getUsersStarted = () => ({
    type: GET_USERS_STARTED
});

const getUsersFailure = (error) => ({
    type: GET_USERS_FAILURE,
    payload: {
        error
    }
});

export default getUsers;