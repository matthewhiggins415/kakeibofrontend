import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import getAllExpenses from '../api/expense'
import { Redirect } from 'react-router'


const Home = ({ user }) => {
  const [expenses, setExpenses] = useState([])
  const [redirect, setRedirect] = useState(false)

  useEffect(() => {
    const retrieveExpenses = async (user) => {
      let res = getAllExpenses(user)
      console.log(res)
    }
    retrieveExpenses(user)
  }, [])

  const addExpense = () => {
    setRedirect(true)
  }

  if (redirect) {
    return <Redirect to="/add-expense"/>
  }

  return (
    <>
      <h1>Home View</h1>
      <button onClick={addExpense}>New Expense</button>
    </>
  )
}

export default Home