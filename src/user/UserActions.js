import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  TEST
} from './actionConstants';

export function test(payload){
  return {
    type: TEST,
    payload,
    mockUser: {
      name: 'Briant Campbell',
      age: 28,
      language: 'Javascript',
      frameworks: ['react, react-native', 'angularJS', 'angular2'],
      skillLevel: 'senior'
    }
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
    user: response.data.user,
    token: response.data.token,
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