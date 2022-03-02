import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Container = styled.div`
box-sizing: border-box;
  height: 10vh;
  width: 100%; 
  background-color: gray;
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  padding: 20px;
`

const LinkContainer = styled.div`
  width: 20%;
  display: flex;
  justify-content: space-between
`

const Navbar = () => {

  const style = { 
    'textDecoration': 'none',
    color: 'white'
  }
  return (
    <Container>
      <div>
        <Link style={style} to="/">Kakeibo</Link>
      </div>
      <LinkContainer>
        <Link style={style} to="register">Register</Link>
        <Link style={style} to="login">Login</Link>
      </LinkContainer>
    </Container>
  )
}

export default Navbar