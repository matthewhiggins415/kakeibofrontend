import styled from 'styled-components'

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
`

const Expense = ({ expense }) => {
  return (
    <Container>
      <p>{expense.title}</p>
      <p>${expense.cost}</p>
      <Button>details</Button>
    </Container>
  )
}

export default Expense 