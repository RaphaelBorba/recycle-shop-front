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

export async function getProducts(category, name) {
  const promise = await axios.get(`${BASE_URL}/products?category=${category}&name=${name}`)
  return promise
}

export async function getOneProduct(id) {
  const promise = await axios.get(`${BASE_URL}/products/${id}`)
  return promise
}

export async function deleteProduct(id, token) {
  const promise = axios.delete(`${BASE_URL}/products/${id}`, {
    headers: {
      'Authorization': `Bearer ${token}`,
    }
  });
  return promise;
}

export function postRegistration(authorization, body) {
  const promise = axios.post(`${BASE_URL}/registration`, body, {
    headers: {
      'Authorization': `Bearer ${authorization}`,
    }
  });
  return promise;
}


export function getShopping_cart(Authorization) {

  const promise = axios.get(`${BASE_URL}/Shopping_cart`, {
    headers: {
      'Authorization': `Bearer ${Authorization}`,
    }
  });
  return promise;
}

export function postShopping_cart(Authorization, body) {
  const promise = axios.post(`${BASE_URL}/Shopping_cart`,body, {
    headers: {
      'Authorization': `Bearer ${Authorization}`,
    }
  });
  return promise;
}

export function postSend(Authorization, body) {
  const promise = axios.post(`${BASE_URL}/sold`, body, {
    headers: {
      'Authorization': `Bearer ${Authorization}`,
    }
  });
  return promise;
}
