import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_FAIL
} from './actionConstants';
import Api from '../config/apiWrapper';

// Thunk Action Creator
export function userLoginThunk(payload){
  return function(dispatch){
    dispatch(loginRequest(payload))
    return Api.login(payload)
      .then(response => response.json())
      .then(json => {
        //console.log('server response: ', json);
        dispatch(loginSuccess(json))
      });
  }
}

export function loginRequest(payload){
  return {
    type: LOGIN_REQUEST,
    payload
  }
}

export function loginSuccess(response){
  return {
    type: LOGIN_SUCCESS,
    response,
    user: response.data,
    token: response.token,
    receivedAt: Date.now()
  }
}

export function loginFail(response){
  return {
    type: LOGIN_FAIL,
    response,
    errors: response.errors
  }
}

export function registerRequest(payload){
  return {
    type: REGISTER_REQUEST,
    payload,
    attemptedAt: Date.now()
  }
}

export function registerSuccess(response){
  return {
    type: REGISTER_SUCCESS,
    response,
    receivedAt: Date.now()
  }
}

export function registerFail(response){
  return {
    type: REGISTER_FAIL,
    response,
    receivedAt: Date.now()
  }
}