import axios from 'axios'
import apiUrl from '../apiConfig'

//create plaid link token
export const createLinkToken = (user) => {
  return axios.post(apiUrl + '/api/create_link_token', 
    { 
      headers: {
        Authorization: `Bearer ${user.token}`
      }
    })
}