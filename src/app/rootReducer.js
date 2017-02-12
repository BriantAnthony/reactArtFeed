import { combineReducers } from 'redux';
import userReducer from '../user/userReducer';
import cardReducer from '../cardFeed/cardReducer';

const rootReducer = combineReducers({
  app: userReducer,
  artCard: cardReducer
})

export default rootReducer;