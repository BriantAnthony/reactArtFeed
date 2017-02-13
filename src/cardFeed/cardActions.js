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
        if(json.message){
          dispatch(randomFail(json))
        } else {
          dispatch(randomSuccess(json))
        }
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

// Like Thunk
export function likeThunk(artId, userId){
  return function(dispatch){
    dispatch(likeRequest(artId, userId))
    return Api.likeArt(artId, userId)
      .then(response => response.json())
      .then(json => {
        dispatch(likeSuccess(json))
      })
      .catch((err) => {
        Promise.reject(err);
        dispatch(likeFail(err))
      });
  }
}

export function likeRequest(artId, userId){
  return {
    type: LIKE_REQUEST,
    artId,
    userId,
  }
}

export function likeSuccess(response){
  return {
    type: LIKE_SUCCESS,
    response,
    art: response.artwork
  }
}

export function likeFail(response){
  return {
    type: LIKE_FAIL,
    response,
    errors: response.message
  }
}
