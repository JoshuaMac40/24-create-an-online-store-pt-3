import fetch from 'isomorphic-fetch';
require('es6-promise').polyfill();

export default function fetchApi(method, url, data) {
  const body = method === 'get' ? {} : { body: JSON.stringify(data) };
  return fetch(url, {
    method: method,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'X-Requested-With': 'XMLHttpRequest'
    },
    credentials: 'same-origin',
    ...body,
  }).then(response => response.json());
}
