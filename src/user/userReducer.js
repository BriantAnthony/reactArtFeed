import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_FAIL
} from './actionConstants';

const initialState = {
  isAuthenticated: false,
  isFetching: false,
  user: {},
  lastLogin: null,
  errors: {},
};

function userReducer(state = initialState, action){
  switch(action.type) {
    // Login
    case LOGIN_REQUEST:
      return Object.assign({}, state, {
        isFetching: true
      });
    case LOGIN_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        user: action.user,
        isAuthenticated: true,
        lastLogin: action.receivedAt
      });
    case LOGIN_FAIL:
      return Object.assign({}, state, {
        isFetching: false,
        errors: action.errors
      });
    case LOGOUT:
      return Object.assign({}, state, {
        isAuthenticated: false
      })
    // Register
    case REGISTER_REQUEST:
      return Object.assign({}, state, {
        isFetching: true
      });
    case REGISTER_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        user: action.user,
        isAuthenticated: true,
        token: action.token,
        lastLogin: action.receivedAt
      });
    case REGISTER_FAIL:
      return Object.assign({}, state, {
        isFetching: false,
        errors: action.errors
      });
    default:
      return state;
  } 
}

export default userReducer;
