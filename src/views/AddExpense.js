import React, { useState } from 'react'
import { Navigate } from 'react-router-dom'
import { createExpense } from '../api/expense'
import styled from 'styled-components'

const Form = styled.form`
  width: 50%; 
  height: 50%; 
  display: flex;
  flex-direction: column; 
  justify-content: space-evenly;
  align-items: center;
`

const Input = styled.input`
  padding: 10px;
`

const Button = styled.button`
  padding: 10px;
  background-color: black;
  color: white;
`

const AddExpense = ({ user }) => {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [type, setType] = useState('')
  const [cost, setCost] = useState(null)
  const [navigate, setNavigate] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      let expenseData = {
        title: title, 
        description: description, 
        type: type,
        cost: cost
      }

      let res = await createExpense(user, expenseData)
      console.log(res)

    } catch(err) {
      setTitle('')
      setDescription('')
      setType('')
      setCost(null)
      console.log(err)
    }
  }

  const toggleNavigate = () =>{
    setNavigate(true)
  }

  if (navigate) {
    return <Navigate to="/home" />
  }

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Input onChange={(e) => setTitle(e.target.value)} value={title} name="title" type="text" placeholder="title"/>
        <Input onChange={(e) => setDescription(e.target.value)} value={description} name="description" type="text" placeholder="description"/>
        <Input onChange={(e) => setType(e.target.value)} value={type} name="type" type="text" placeholder="type"/>
        <Input onChange={(e) => setCost(e.target.value)} value={cost} name="cost" type="number" placeholder="cost"/>
        <Button type="submit">Submit</Button>
        <Button onClick={toggleNavigate}>Cancel</Button>
      </Form>
    </>
  )
}

export default AddExpense 