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

// Read individual
export const getExpense = (user, id) => {
  return axios.get(apiUrl + `/expense/${id}`, {
    headers: {
      Authorization: `Bearer ${user.token}`
    }
  })
}

// update 
export const updateExpense = (user, id, data) => {
  return axios.patch(apiUrl + `/expense/${id}`, {
    expense: data
  }, {
    headers: {
      Authorization: `Bearer ${user.token}`
    }
  })
}

// delete 
export const deleteExpense = (user, id) => {
  return axios.delete(apiUrl + `/expense/${id}`, {
    headers: {
      Authorization: `Bearer ${user.token}`
    }
  })
}

// delete all expenses 
export const clearExpenses = (user) => {
  return axios.delete(apiUrl + '/expenses', {
    headers: {
      Authorization: `Bearer ${user.token}`
    }
  })
}