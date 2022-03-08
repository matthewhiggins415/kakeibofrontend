import React, { useState } from 'react'
import styled from 'styled-components'
import { Navigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { animationOne, transition } from '../animations';
import { FiMoreHorizontal } from 'react-icons/fi';

const Container = styled(motion.div)`
  box-sizing: border-box;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  margin: 0 auto;
  margin-top: 10px;
  border-radius: 10px;
  background-color: #fff;
  color: #3A3B3C;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`

const Button = styled.button`
  padding: 10px;
  color: black;
  background-color: transparent;
  border: none;
  cursor: pointer;
  border-radius: 10px;
  width: auto;
  `

  const P = styled.p`
  @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Hubballi&family=Saira+Condensed:wght@600&family=Smooch+Sans:wght@100&display=swap');
  font-family: 'Saira Condensed', sans-serif;
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
    <Container 
      initial='out'
      animate='in'
      exit='out'
      variants={animationOne}
      transition={transition}>
      <P>{index + 1}</P>
      <P>{expense.title}</P>
      <P>{expense.type}</P>
      <P>{'$' + expense.cost}</P>
      <Button onClick={toggleNavigate}><FiMoreHorizontal size={20} color={'#3A3B3C'}/></Button>
    </Container>
  )
}

export default Expense 