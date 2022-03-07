import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import logo from '../theArtLogo.png'

const DIV = styled.div`
  box-sizing: border-box;
  margin: 0;
  position: sticky;
  width: 98vw;
  height: 10vh;
  padding: 10px;
  display: flex;
  margin: 0 auto;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  box-shadow: rgba(27, 31, 35, 0.04) 0px 1px 0px, rgba(255, 255, 255, 0.25) 0px 1px 0px inset;
  `

const NavContainer = styled.div`
  margin: 10px;
  width: 25%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
`

const linkStyle = {
  color: "black",
  underline: "none", 
  "textDecoration": "none",
  "backgroundColor": "white", 
  padding: "12px", 
  "borderRadius": "10px",
  "box-shadow": "rgba(0, 0, 0, 0.15) 0px 2px 8px"
}

const imgStyle = {
  width: "165px", 
  height: 'auto'
}

const authenticatedOptions = (
  <Link style={linkStyle} to='/sign-out' >Sign Out</Link>
)

const unauthenticatedOptions = (
  <NavContainer>
    <Link style={linkStyle} to='/register'>Register</Link>
    <Link style={linkStyle} to='/login'>Login</Link>
  </NavContainer>
)

const Header = ({ user }) => {
  return (
    <DIV>
      <Link to="/">
        <img style={imgStyle} alt="logo" src={logo}/>
      </Link>
    
      {user ? authenticatedOptions : unauthenticatedOptions}
    </DIV>
  )
}

export default Header