import {
  RANDOM_REQUEST,
  RANDOM_SUCCESS,
  RANDOM_FAIL,
  LIKE_REQUEST,
  LIKE_SUCCESS,
  LIKE_FAIL
} from './actionConstants';
import Api from '../config/apiWrapper';

// Thunk Action Creator
export function randomCardThunk(){
  return function(dispatch){
    dispatch(randomRequest())
    return Api.randomCard()
      .then(response => response.json())
      .then(json => {
        dispatch(randomSuccess(json))
      })
      .catch((err) => {
        Promise.reject(err);
        dispatch(randomFail(err))
      });
  }
}

// Fetch Random Card
export function randomRequest(){
  return {
    type: RANDOM_REQUEST,
  }
}

export function randomSuccess(response){
  return{
    type: RANDOM_SUCCESS,
    response,
    art: response.data,
    receivedAt: Date.now()
  }
}

export function randomFail(response){
  return {
    type: RANDOM_FAIL,
    response,
    errors: response.message
  }
}