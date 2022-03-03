import axios from 'axios'
import apiUrl from '../../src/apiConfig'


// read all  
export const getAllExpenses = (user) => {
  return axios.get(apiUrl + '/expenses', {
    headers: {
      Authorization: `Bearer ${user.token}`
    }
  })
}

// create expense 
export const createExpense = (user, data) => {
  return axios.post(apiUrl + '/expense', {
    expense: data
  }, {
    headers: {
      Authorization: `Bearer ${user.token}`
    }
  })
}

// update 

// delete 