import React, { useState } from 'react'
import styled from 'styled-components'
import { createLinkToken } from '../api/plaid'
 
const Button = styled.button`
   padding: 10px;
   border: 2px solid gray;
`

const Plaid = ({ user }) => {
  const connect = async () => {
    console.log('connected')
    let res = await createLinkToken(user)
    console.log(res)
  }

  return (
    <>
      <h1>Plaid View</h1>
      <Button onClick={connect}>Connect thru plaid</Button>
    </>
  )
}

export default Plaid