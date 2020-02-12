import fetch from 'isomorphic-fetch'
import {API_URL} from '../../config'
import store from 'store'

export function requestGet(apiName, payload) {
  return fetch(`${API_URL}${apiName}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Authorization": store.get('token') && `Bearer ${store.get('token')}`
    },
  }).then(response => {

    if (response.status === 204) {
      return {status: response.status, json: 'json'}
    } else {
      return response.json().then(json => ({
          status: response.status,
          json: json,
        })
      )
    }
  }).then(({status, json}) => {
    return responseHandler(status, json)
  })
    .catch(() => {
        // history.push('/sorry')
        console.log('go to sorry')
      }
    )
}

const responseHandler = (status, json) => {
  if (status < 300) {
    return [json, undefined]
  } else {
    // if (status === 401 || status === 403) history.push('/signin')
    if (status === 401 || status === 403) console.log('go to sign-in');
    return [undefined, json]
  }
}