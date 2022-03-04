import React, { useState } from 'react'
import { Navigate } from 'react-router-dom'
import { createExpense } from '../api/expense'
import styled from 'styled-components'

const Div = styled.div`
  box-sizing: border-box;
  height: 90vh;
  width: 100%;
  display: flex;
  align-items: start;
  justify-content: center;
  margin-top: 100px;
`

const Form = styled.form`
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

const Input = styled.input`
  box-sizing: border-box;
  padding: 15px;
  width: 100%;
  border-radius: 10px;
  outline: none;
  border: none;
  box-shadow: rgba(0, 0, 0, 0.06) 0px 2px 4px 0px inset;
  `

const Select = styled.select`
  box-sizing: border-box;
  padding: 15px;
  width: 100%;
  border-radius: 10px;
  outline: none;
  border: none;
  box-shadow: rgba(0, 0, 0, 0.06) 0px 2px 4px 0px inset;
`

const Button = styled.button`
  box-sizing: border-box;
  width: 100%;   
  border: none;
  padding: 15px;
  background-color: black;
  color: white;
  cursor: pointer;
`

const AddExpense = ({ user }) => {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [type, setType] = useState('')
  const [cost, setCost] = useState('')
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
      setNavigate(true)

    } catch(err) {
      setTitle('')
      setDescription('')
      setType('')
      setCost('')
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
    <Div>
      <Form onSubmit={handleSubmit}>
        <Input onChange={(e) => setTitle(e.target.value)} value={title} name="title" type="text" placeholder="title"/>
        <Input onChange={(e) => setDescription(e.target.value)} value={description} name="description" type="text" placeholder="description"/>
        <Input onChange={(e) => setCost(e.target.value)} value={cost} name="cost" type="text" pattern="[0-9]*" placeholder="cost" />
        <Select value={type} onChange={(e) => setType(e.target.value)}> 
                  <option name="need"> Need</option>
                  <option name="want">Want</option>
                  <option name="cultural"> Cultural</option>
                  <option name="unexpected">Unexpected</option>
        </Select>
        <Button type="submit">Submit</Button>
        <Button onClick={toggleNavigate}>Cancel</Button>
      </Form>
    </Div>
  )
}

export default AddExpense 