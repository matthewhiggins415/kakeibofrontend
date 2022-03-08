import styled from 'styled-components'

const Container = styled.div`
min-width: 200px;
max-width: 300px;
  width: 20%;
  height: auto;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  margin: 10px;
  padding: 25px;
  border: 1px solid black;
  align-items: center;
  justify-content: center;
  background-color: #3A3B3C;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
`
const H1 = styled.h1`
  color: lightgreen;
`

const H4 = styled.h4`
  color: white;
`

const DataCard = ({ type, data }) => {
  return (
    <Container>
      <H1>{"$" + data}</H1>
      <H4>{type}</H4>
    </Container>
  )
}

export default DataCard