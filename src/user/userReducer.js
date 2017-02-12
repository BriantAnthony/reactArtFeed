import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  TEST
} from './actionConstants';

const initialState = {
  isAuthenticated: false,
  isFetching: false,
  user: {},
  token: null,
  lastLogin: null,
  errors: {},
  tested: false,
  message: null
};

function userReducer(state = initialState, action){
  switch(action.type) {
    case TEST:
      return {
        ...state,
        tested: true,
        message: 'Congrats',
        user: action.mockUser
      };
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
        token: action.token,
        lastLogin: action.receivedAt
      });
    case LOGIN_FAIL:
      return Object.assign({}, state, {
        isFetching: false,
        errors: action.errors
      });
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
