import React, { useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom'
import Chart from "react-apexcharts"
import styled from 'styled-components'
import { getAllExpenses } from '../api/expense'

const Container = styled.div`
  width: 100%;
  height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: pink;
`

const Data = ({ user }) => {
    const [needs, setNeeds] = useState([])
    const [wants, setWants] = useState([])
    const [culturals, setCulturals] = useState([])
    const [unexpecteds, setUnexpecteds] = useState([])
    const [navigate, setNavigate] = useState(false)

    useEffect(() => {
        const retrieveExpenses = async (user) => {
          let res = await getAllExpenses(user)
          console.log(res.data.expenses)
        }
        retrieveExpenses(user)
      }, [])
    //make api to get data. add data to series 
  const options = { labels: ["Need", "Want", "Cultural", "Unexpected"] };
  const series = [1, 2, 3, 4]; //our data

  const handleNavigate = () => {
    setNavigate(true)
  }

  if (navigate) {
    return <Navigate to="/home"/>
  }

  if (!user) {
    return <Navigate to="/sign-out"/>
  }

  return (
    <Container>
      <button onClick={handleNavigate}>Go Back</button>
      <Chart options={options} series={series} type="donut" width="380" />
    </Container>
);
}

export default Data 