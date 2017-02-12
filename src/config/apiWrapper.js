import localforage from 'localforage';
import fetch from 'isomorphic-fetch';

const host = 'http://ec2-52-23-165-85.compute-1.amazonaws.com:4250/api';

const verbs = {
  POST: 'POST',
  GET: 'GET',
  PUT: 'PUT',
  DELETE: 'DELETE'
};

// returns persisted token for authenticated requests
const getToken = () => {
  localforage.getItem('reduxPersist:token').then((value) => {
    //console.log(value);
    return value;
  }).catch((err) => {
      // This code runs if there were any errors
      console.log(err);
  });
}

const request = (url, verb, payload) => {
  const options = {
    method: verb,
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    }
  };
  options.headers['x-access-token'] = getToken();

  if(verb !== 'GET') {
    options.body = JSON.stringify(payload)
  }

  return fetch(url, options);
}

const Api = {
  login: (payload) => {
    const url = host + '/login';
    return request(url, verbs.POST, payload);
  },
}

export default Api;