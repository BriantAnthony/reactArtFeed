import {
  RANDOM_REQUEST,
  RANDOM_SUCCESS,
  RANDOM_FAIL,
  LIKE_REQUEST,
  LIKE_SUCCESS,
  LIKE_FAIL
} from './actionConstants';

const initialState = {
  isFetching : false,
  errors: {},
  data: {},
  receivedAt: null
};

function cardReducer(state = initialState, action){
  switch(action.type) {
    // random card generator
    case RANDOM_REQUEST:
      return Object.assign({}, state, {
        isFetching: true
      });
    case RANDOM_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        data: action.art,
        receivedAt: action.receivedAt
      });
    case RANDOM_FAIL:
      return Object.assign({}, state, {
        isFetching: false,
        errors: action.errors
      });

    // Like / Admire artwork
    case LIKE_REQUEST:
      return Object.assign({}, state, {
        isFetching: true,
      });
    case LIKE_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        data: action.data,
        receivedAt: action.receivedAt
      });
    case LIKE_FAIL:
      return Object.assign({}, state, {
        isFetching: false,
        errors: action.message
      });
    default:
      return state;
  }
}

export default cardReducer;