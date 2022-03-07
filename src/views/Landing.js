import { motion } from 'framer-motion'
import styled from 'styled-components'

const Div = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 90vh;
  background-image: linear-gradient(#F8F8FF, #1E90FF);
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`

const P = styled.p`
  font-size= 50px;
  color: white;
  height: 30%;
`

const Landing = () => {
  return (
    <Div>
      <P>Kaikebo</P>
    </Div>
  )
}

export default Landing 