import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import {
  CREATION_POST_FAILURE,
  CREATION_POST_STARTED,
  CREATION_POST_SUCCESS,
} from "./actions/addPostAction";
import {
  DELETE_POST_FAILURE,
  DELETE_POST_STARTED,
  DELETE_POST_SUCCESS,
} from "./actions/deletePostAction";
import {
  GET_POSTS_FAILURE,
  GET_POSTS_STARTED,
  GET_POSTS_SUCCESS,
} from "./actions/getPostsAction";
import {
  GET_USERS_FAILURE,
  GET_USERS_STARTED,
  GET_USERS_SUCCESS,
} from "./actions/getUsersAction";

const initialState = {
  usersLoading: false,
  postsLoading: false,
  usersError: null,
  postsError: null,
  posts: [],
  users: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS_SUCCESS:
      return {
        ...state,
        usersLoading: false,
        usersError: null,
        users: action.users,
      };
    case GET_USERS_STARTED:
      return {
        ...state,
        usersLoading: true,
      };
    case GET_USERS_FAILURE:
      return {
        ...state,
        usersLoading: false,
        usersError: action.payload.error,
      };
    case GET_POSTS_SUCCESS:
      return {
        ...state,
        postsLoading: false,
        postsError: null,
        posts: action.posts,
      };
    case GET_POSTS_STARTED:
      return {
        ...state,
        postsLoading: true,
      };
    case GET_POSTS_FAILURE:
      return {
        ...state,
        postsLoading: false,
        postsError: action.payload.error,
      };
    case CREATION_POST_STARTED:
      return {
        ...state,
        postsLoading: true,
      };
    case CREATION_POST_SUCCESS:
      return {
        ...state,
        postsLoading: false,
        postsError: null,
        posts: [...state.posts, action.payload],
      };
    case CREATION_POST_FAILURE:
      return {
        ...state,
        postsLoading: false,
        postsError: action.payload.error,
      };
    case DELETE_POST_STARTED:
      return {
        ...state,
        postsLoading: true,
      };
    case DELETE_POST_SUCCESS:
      const itemIndex = state.posts.findIndex((item) => item.id === action.id);

      return {
        ...state,
        postsLoading: false,
        postsError: null,
        posts: [
          ...state.posts.slice(0, itemIndex),
          ...state.posts.slice(itemIndex + 1),
        ],
      };
    case DELETE_POST_FAILURE:
      return {
        ...state,
        postsLoading: false,
        postsError: action.payload.error,
      };
    default:
      return state;
  }
};

const store = createStore(reducer, applyMiddleware(thunk));

export default store;
