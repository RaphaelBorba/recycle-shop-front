import axios from 'axios';

const BASE_URL = 'https://recycleshop-api.onrender.com';


export function postLogin(body) {

  const promise = axios.post(`${BASE_URL}/sing_in`, body);
  return promise;
}

export function postCadastro(body) {
  const promise = axios.post(`${BASE_URL}/sing_up`, body);
 return promise;
}

export async function getProducts(config){
  const promise = await axios.get(`${BASE_URL}/products`)
  return promise
}