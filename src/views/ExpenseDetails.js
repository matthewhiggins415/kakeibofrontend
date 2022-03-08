import React, {useEffect, useState} from 'react'
import styled from 'styled-components'
import { getExpense, deleteExpense } from '../api/expense'
import { useParams, Navigate } from 'react-router-dom'
import EditModal from '../components/EditModal'
import { GlobalStyle } from '../globalStyles'
import { motion } from 'framer-motion'
import { animationOne, transition } from '../animations';

const Container = styled(motion.div)`
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
  @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Hubballi&family=Saira+Condensed:wght@600&family=Smooch+Sans:wght@100&display=swap');
  font-family: 'Saira Condensed', sans-serif;
  font-size: 15px;  
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

const P = styled.p`
  margin-top: 10px;
  margin-bottom: 5px;
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
  }, [showModal])

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
      setNavigate(true)
    } catch(e) {
      console.log(e)
    }
  }

  const toggleModal = () => {
    setShowModal(!showModal)
  }

  return (
    <Container 
      initial='out'
      animate='in'
      exit='out'
      variants={animationOne}
      transition={transition}>
      <EditModal user={user} id={id} showModal={showModal} setShowModal={setShowModal}/> 
      <Header>
        <Button onClick={navigateBack}>Back</Button>
        <Button onClick={toggleModal}>Edit</Button>
      </Header>
      <ExpenseContainer>
        <P>{expense.title}</P>
        <P>{expense.description}</P>
        <P>{'$' + expense.cost}</P>
        <P>{expense.type}</P>
      </ExpenseContainer>
      <DeleteContainer>
        <Button onClick={handleDelete}>Delete</Button>
      </DeleteContainer>
      <GlobalStyle />
    </Container>
  )
}

export default ExpenseDetails