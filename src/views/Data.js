import React, { useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom'
import Chart from "react-apexcharts"
import styled from 'styled-components'
import { getAllExpenses } from '../api/expense'
import DataCard from '../components/DataCard'
import { motion } from 'framer-motion'
import { animationOne, transition } from '../animations';

const Container = styled(motion.div)`
  width: 100%;
  height: 90vh;
  display: flex;
  flex-direction: column;
`
const Header = styled.div`
  width: 100%;
  height: auto;
  margin-top: 50px;
`

const Button = styled.button`
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Hubballi&family=Saira+Condensed:wght@600&family=Smooch+Sans:wght@100&display=swap');
font-family: 'Saira Condensed', sans-serif;
font-size: 15px;
  box-sizing: border-box;
  min-width: 100px;   
  max-width: 200px;
  border: none;
  border-radius: 4px;
  padding: 16px 32px;
  background-color: #141414;;
  color: #fff;
  cursor: pointer;
  margin-left: 20px;
`

const CardContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  margin: 0 auto;
  justify-content: space-evenly;
  flex-wrap: wrap;
`

const ChartContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 50px auto;
`

const Data = ({ user }) => {
    const [needs, setNeeds] = useState([])
    const [needsSum, setNeedsSum] = useState(0)

    const [wants, setWants] = useState([])
    const [wantsSum, setWantsSum] = useState(0)

    const [culturals, setCulturals] = useState([])
    const [culturalsSum, setCulturalsSum] = useState(0)

    const [unexpecteds, setUnexpecteds] = useState([])
    const [unexpectedsSum, setUnexpectedsSum] = useState(0)

    const [navigate, setNavigate] = useState(false)

    useEffect(() => {
        const retrieveExpenses = async (user) => {
          let res = await getAllExpenses(user)
          let expenses = res.data.expenses
       
          let needsArr = expenses.filter(expense => expense.type === 'Need')
          let wantsArr = expenses.filter(expense => expense.type === 'Want')
          let culturalArr = expenses.filter(expense => expense.type === 'Cultural')
          let unexpectedArr = expenses.filter(expense => expense.type === 'Unexpected')

          setNeeds(needsArr)
          setWants(wantsArr)
          setCulturals(culturalArr)
          setUnexpecteds(unexpectedArr)

          //take the needsArr and set state to total expenses added up 
          //take each expense and create a new arr holding only cost values as ACTUAL numbers
          let needCosts = needsArr.map(expense => {
              return parseInt(expense.cost)
          })

          //take the arr and reduce into sum value
          let needSum = needCosts.reduce(function (previousValue, currentValue) {
            return previousValue + currentValue
          }, 0)
        
          //set value to state
          setNeedsSum(needSum)

          //Same for wants 
          let wantCosts = wantsArr.map(expense => {
            return parseInt(expense.cost)
          })

          let wantSum = wantCosts.reduce(function (previousValue, currentValue) {
            return previousValue + currentValue
          }, 0)

          setWantsSum(wantSum)

          //same for culturals 
          let culturalCosts = culturalArr.map(expense => {
            return parseInt(expense.cost)
          })

          let culturalSum = culturalCosts.reduce(function (previousValue, currentValue) {
            return previousValue + currentValue
          }, 0)

          setCulturalsSum(culturalSum)

          //same for unexpecteds
          let unexpectedCosts = unexpectedArr.map(expense => {
            return parseInt(expense.cost)
          })

          let unexpectedSum = unexpectedCosts.reduce(function (previousValue, currentValue) {
            return previousValue + currentValue
          }, 0)

          setUnexpectedsSum(unexpectedSum)
        }
        retrieveExpenses(user)
      }, [])
    //make api to get data. add data to series 
  const options = { labels: ["Need", "Want", "Cultural", "Unexpected"] };
  const series = [parseInt(`${needs.length}`) , parseInt(`${wants.length}`), parseInt(`${culturals.length}`), parseInt(`${unexpecteds.length}`)]; //our data

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
    <>
    <Header>
      <Button onClick={handleNavigate}>Go Back</Button>
    </Header>
    <Container
      initial='out'
      animate='in'
      exit='out'
      variants={animationOne}
      transition={transition}
    >
      <ChartContainer>
        <Chart options={options} series={series} type="donut" width="380" />
      </ChartContainer>
      <CardContainer>
        <DataCard type={'need'} data={needsSum}/>
        <DataCard type={'want'} data={wantsSum}/>
        <DataCard type={'cultural'} data={culturalsSum}/>
        <DataCard type={'unexpected'} data={unexpectedsSum}/>
      </CardContainer>
    </Container>
    </>
);
}

export default Data 