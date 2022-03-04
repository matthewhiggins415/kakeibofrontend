import React, { useState } from 'react'
import styled from 'styled-components'
import { Navigate } from 'react-router-dom'

const Container = styled.div`
  box-sizing: border-box;
  width: 60%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  margin: 0 auto;
  margin-top: 10px;
  border-radius: 10px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`

const Button = styled.button`
  padding: 10px;
  color: white;
  background-color: black;
  border: none;
  cursor: pointer;
  border-radius: 10px;
`

const Expense = ({ expense }) => {
  const [navigate, setNavigate] = useState(false)

  const toggleNavigate = () => {
    setNavigate(true)
  }

  if (navigate) {
    return <Navigate to={`/expense/${expense._id}`} /> 
  }

  return (
    <Container>
      <p>{expense.title}</p>
      <p>{'$' + expense.cost}</p>
      <Button onClick={toggleNavigate}>details</Button>
    </Container>
  )
}

export default Expense 