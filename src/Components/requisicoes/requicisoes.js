import axios from 'axios';

const BASE_URL = 'http://localhost:5000';


export function postLogin(body) {

  const promise = axios.post(`${BASE_URL}/sing_in`, body);
  return promise;
}
