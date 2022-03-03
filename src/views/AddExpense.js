import React, { useState, useEffect } from 'react'

const AddExpense = ({ user }) => {
  const [expense, setExpense]
  return (
    <>
      <form>
        <input placeholder="title"/>
        <input placeholder="description"/>
        <input placeholder="type"/>
      </form>
    </>
  )
}

export default AddExpense 