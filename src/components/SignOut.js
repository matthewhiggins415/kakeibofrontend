import React, { useState, useEffect } from 'react'
import { Navigate } from 'react-router-dom'

import { signOut } from '../api/auth'

const SignOut = ({ user, clearUser, notify }) => {
  const [shouldNavigate, setShouldNavigate] = useState(false)

  useEffect(() => {
    const performSignOut = async () => {

      try { 
        await signOut(user)
        clearUser()
        setShouldNavigate(true)
        notify('sign out success')
      } catch(e) {
        notify('something went wrong', 'warning')
      }
    }
    performSignOut()
  }, [])

  if (!user || shouldNavigate) {
    return <Navigate to='/' />
  }

  return ''
}

export default SignOut 