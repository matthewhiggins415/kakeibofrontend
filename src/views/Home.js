import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { getAllExpenses, clearExpenses, createExpense } from '../api/expense'
import { Navigate } from 'react-router-dom'
import Expense from '../components/Expense'
import { motion } from 'framer-motion'
import { animationOne, transition } from '../animations'
import { dummyData } from '../components/DummyData'

const Container = styled(motion.div)`
  box-sizing: border-box;
  width: 100%;
  height: 90vh;
  display: flex;
  flex-direction: column; 
  align-items: center;
`

const Header = styled.div`
  width: 60%;
  display: flex;
  align-items: center;
  margin-top: 30px;
  justify-content: space-between;
`

const Button = styled.button`
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Hubballi&family=Saira+Condensed:wght@600&family=Smooch+Sans:wght@100&display=swap');
font-family: 'Saira Condensed', sans-serif;
font-size: 15px;
  box-sizing: border-box;
  width: 20%;   
  max-width: 200px;
  min-width: 100px;
  border: none;
  border-radius: 4px;
  padding: 15px;
  background-color: #3A3B3C;
  color: white;
  cursor: pointer;
`
const ExpenseContainer = styled.div`
  box-sizing: border-box;
  width: 60%;
  margin: 20px auto;
  height: auto;
  min-height: 60vh;
`

const Home = ({ user, notify }) => {
  const [expenses, setExpenses] = useState([])
  const [redirect, setRedirect] = useState(false)
  const [overview, setOverview] = useState(false)
  const [count, setCount] = useState(0)

  useEffect(() => {
    const retrieveExpenses = async (user) => {
      let res = await getAllExpenses(user)
      setExpenses(res.data.expenses)
    }
    retrieveExpenses(user)
  }, [count])

  const addExpense = () => {
    setRedirect(true)
  }

  const onOverview = () => {
    setOverview(true)
  }

  if (redirect) {
    return <Navigate to="/add-expense"/>
  }

  if (overview) {
    return <Navigate to="/data" />
  }

  if (!user) {
    return <Navigate to="/" />
  }

  const sendData = (user) => {
    dummyData.forEach(data => {
      createExpense(user, data)
    })
    notify('Data added')
    setCount(count + 1)
  }

  const clearData = (user) => {
    clearExpenses(user)
    notify('Data cleared')
    setCount(count + 1)
  }

  return (
    <Container 
    initial='out'
    animate='in'
    exit='out'
    variants={animationOne}
    transition={transition}
    >
      <Header>
        <h1>Your Expenses</h1>
      </Header>
      <Header>
        <Button onClick={onOverview}>Overview</Button>
        <Button onClick={addExpense}>New Expense</Button>
        <Button onClick={() => sendData(user)}>seed data</Button>
        <Button onClick={() => clearData(user)}>clear data</Button>
      </Header>
      <ExpenseContainer>
        {expenses.map((expense, index) => {
          return (
            <Expense key={expense._id} index={index} expense={expense}/>
          )
        })}
      </ExpenseContainer>
    </Container>
  )
}

export default Home