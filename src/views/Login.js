import { Navigate } from 'react-router-dom'
import React, { useState } from 'react'
import styled from 'styled-components'
import { signIn } from '../api/auth'
import { motion } from 'framer-motion'
import { animationOne, transition } from '../animations';

const DIV = styled(motion.div)`
box-sizing: border-box;
height: 90vh;
width: 100%;
display: flex;
align-items: start;
justify-content: center;
margin-top: 100px;
`
const FORM = styled.form`
border-radius: 10px;
width: 50%; 
max-width: 400px;
max-height: 500px;
min-width: 300px;
min-height: 400px;
height: 50%; 
display: flex;
flex-direction: column; 
justify-content: space-evenly;
align-items: center;
padding: 15px;
box-shadow: rgba(0, 0, 0, 0.2) 0px 18px 50px -10px;
`
const INPUT = styled.input`
box-sizing: border-box;
padding: 15px;
width: 100%;
border-radius: 10px;
outline: none;
border: none;
box-shadow: rgba(0, 0, 0, 0.06) 0px 2px 4px 0px inset;
`
const BUTTON = styled.button`
box-sizing: border-box;
width: 100%;   
border: none;
padding: 15px;
background-color: black;
color: white;
cursor: pointer;
`

const Login = ({ setUser, fireMessage }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [shouldNavigate, setShouldNavigate] = useState(false)

  const onSignIn = async (event) => {
    event.preventDefault()
    try {
      const res = await signIn(email, password)
      setUser(res.data.user)    
      setShouldNavigate(true)
      
    } catch (error) {
      setEmail('')
      setPassword('')
    }
  }

  if (shouldNavigate) {
    return <Navigate to='/home' />
  }

  return (
    <DIV
    initial='out'
      animate='in'
      exit='out'
      variants={animationOne}
      transition={transition}

    >
      <FORM onSubmit={onSignIn}>
        <h1>Login</h1>
        <INPUT 
          placeholder="email" 
          value={email} 
          onChange={event => setEmail(event.target.value)} 
          name="email" 
          type="email"
          required>
        </INPUT>
        <INPUT 
          placeholder="password" 
          value={password} 
          onChange={event => setPassword(event.target.value)} 
          name="password" 
          type="password"
          required>
        </INPUT>
        <BUTTON type="submit">Login</BUTTON>
      </FORM>
    </DIV>
  )
}

export default Login 