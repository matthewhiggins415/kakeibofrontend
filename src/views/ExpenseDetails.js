import React, {useEffect, useState} from 'react'
import styled from 'styled-components'
import { getExpense, deleteExpense } from '../api/expense'
import { useParams, Navigate } from 'react-router-dom'
import EditModal from '../components/EditModal'
import { GlobalStyle } from '../globalStyles'

const Container = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 90vh;
  display: flex;
  flex-direction: column;
`

const ExpenseContainer = styled.div`
  box-sizing: border-box;
  width: 60%;
  margin: 20px auto;
  display: flex;
  flex-direction: column; 
  border-radius: 10px;
  padding: 15px;
  align-items: start;
  justify-content: space-evenly;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;`

const Header = styled.div`
  width: 60%;
  display: flex;
  align-items: center;
  margin: 0 auto;
  margin-top: 30px;
  justify-content: space-between;
`

const Button = styled.button`
  box-sizing: border-box;
  width: 20%;   
  max-width: 200px;
  min-width: 100px;
  border-radius: 4px;
  border: none;
  padding: 15px;
  background-color: black;
  color: white;
  cursor: pointer;
`

const DeleteContainer = styled.div`
  width: 60%;
  display: flex;
  align-items: center;
  margin: 0 auto;
  justify-content: space-between;
`

const ExpenseDetails = ({ user }) => {
  const [expense, setExpense] = useState({})
  const [navigate, setNavigate] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const { id } = useParams()

  useEffect(() => {
    console.log(id)

    const retrieveExpense = async () => {
      let res = await getExpense(user, id)
      setExpense(res.data.expense)
    }

    retrieveExpense()
  }, [])

  if (!user) {
    return <Navigate to="/sign-out"/>
  }

  const navigateBack = () => {
    setNavigate(true)
  }

  if (navigate) {
    return <Navigate to="/home" />
  }

  if (!user) {
    return <Navigate to="sign-out"/>
  }

  const handleDelete = async () => {
    try {
      let res = await deleteExpense(user, id)
      console.log(res)
      setNavigate(true)
    } catch(e) {
      console.log(e)
    }
  }

  const toggleModal = () => {
    setShowModal(!showModal)
  }

  return (
    <Container>
      <EditModal showModal={showModal} setShowModal={setShowModal}/> 
      <Header>
        <Button onClick={navigateBack}>Back</Button>
        <Button onClick={toggleModal}>Edit</Button>
      </Header>
      <ExpenseContainer>
        <p>{expense.type}</p>
        <p>{expense.title}</p>
        <p>{'$' + expense.cost}</p>
        <p>{expense.description}</p>
      </ExpenseContainer>
      <DeleteContainer>
        <Button onClick={handleDelete}>Delete</Button>
      </DeleteContainer>
      <GlobalStyle />
    </Container>
  )
}

export default ExpenseDetails