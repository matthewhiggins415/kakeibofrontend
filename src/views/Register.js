import React, { useState } from 'react'
import { Navigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import styled from 'styled-components'
import { signUp, signIn } from '../api/auth'

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

const Register = ({ setUser }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [shouldNavigate, setShouldNavigate] = useState(false)

  const onRegister = async (event) => {
    event.preventDefault()

    try {
      await signUp(email, password, confirmPassword)
      const res = await signIn(email, password)
      setUser(res.data.user)
      console.log(res.data.user)
    
      // msgAlert({
      //   heading: 'Sign Up Success',
      //   message: signUpSuccess,
      //   variant: 'success'
      // })
      setShouldNavigate(true)
    } catch (error) {
      setEmail('')
      setPassword('')
      setConfirmPassword('')
      // msgAlert({
      //   heading: 'Sign Up Failed with error: ' + error.message,
      //   message: signUpFailure,
      //   variant: 'danger'
      // })
    }
  }

  if (shouldNavigate) {
    return <Navigate to='/home' />
  }

  return (
    <DIV
    animate={{ opacity: [0 ,1], y: [0, 30] }}
    exit={{opacity: [1,0]}}
    transition={{ duration: .4 }}>
      <FORM onSubmit={ onRegister }>
        <h1>Register</h1>
        <INPUT 
          placeholder="email" 
          type="email"
          name="email"
          value={email}
          onChange={event => setEmail(event.target.value)}
          required
        />
        <INPUT 
          placeholder="password" 
          type="password"
          name="password"
          value={password}
          onChange={event => setPassword(event.target.value)}
          required
        />
        <INPUT 
          placeholder="confirm password" 
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          onChange={event => setConfirmPassword(event.target.value)}
          required
        />
        <BUTTON type="submit">Sign Up</BUTTON>
      </FORM>
    </DIV>
  )
}

export default Register 