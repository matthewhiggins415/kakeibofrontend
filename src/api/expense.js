import axios from 'axios'
import apiUrl from '../../src/apiConfig'


// create 
export const getAllExpenses = (user) => {
  return axios.get(apiUrl + '/expenses', {
    headers: {
      Authorization: `Bearer ${user.token}`
    }
  })
}

// read all 


// update 

// delete 