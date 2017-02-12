import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  TEST
} from './actionConstants';
import fetch from 'isomorphic-fetch';
const host = 'http://ec2-52-23-165-85.compute-1.amazonaws.com:4250/api/'

export function test(payload){
  return {
    type: TEST,
    payload,
    mockUser: {
      name: 'Briant Anthony',
      age: 28,
      mediums: ['Digital', 'Paper', 'Paint', 'Photography'],
      niche: 'Photography'
    }
  }
}

// Thunk Action Creator
export function userLoginThunk(payload){
  return function(dispatch){
    dispatch(loginRequest(payload))
    return fetch(`${host}login`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload)
    })
      .then(response => response.json())
      .then(json => {
        console.log('server response: ', json);
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