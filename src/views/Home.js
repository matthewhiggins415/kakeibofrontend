import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { getAllExpenses } from '../api/expense'
import { Navigate } from 'react-router-dom'
import Expense from '../components/Expense'

const Home = ({ user }) => {
  const [expenses, setExpenses] = useState([])
  const [redirect, setRedirect] = useState(false)

  useEffect(() => {
    const retrieveExpenses = async (user) => {
      let res = await getAllExpenses(user)
      setExpenses(res.data.expenses)
    }
    retrieveExpenses(user)
  }, [])

  const addExpense = () => {
    setRedirect(true)
  }

  if (redirect) {
    return <Navigate to="/add-expense"/>
  }

  return (
    <>
      <h1>Home View</h1>
      <button onClick={addExpense}>New Expense</button>
      {expenses.map(expense => {
        return (
          <Expense expense={expense}/>
        )
      })}
    </>
  )
}

export default Home