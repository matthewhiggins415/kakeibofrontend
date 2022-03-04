import React, { useState } from 'react'
import styled from 'styled-components'
import { Navigate } from 'react-router-dom'

const Container = styled.div`
  box-sizing: border-box;
  width: 100%;
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
  color: black;
  background-color: white;
  border: none;
  cursor: pointer;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 5px 0px, rgba(0, 0, 0, 0.1) 0px 0px 1px 0px;
  `

const Expense = ({ expense, index }) => {
  const [navigate, setNavigate] = useState(false)

  const toggleNavigate = () => {
    setNavigate(true)
  }

  if (navigate) {
    return <Navigate to={`/expense/${expense._id}`} /> 
  }

  return (
    <Container>
      <p>{index + 1 + "."}</p>
      <p>{expense.title}</p>
      <p>{expense.type}</p>
      <p>{'$' + expense.cost}</p>
      <Button onClick={toggleNavigate}>details</Button>
    </Container>
  )
}

export default Expense 