import { motion } from 'framer-motion'
import styled from 'styled-components'
import { animationOne, transition } from '../animations';
import background from '../background.jpg'

const Div = styled(motion.div)`
  box-sizing: border-box;
  width: 100%;
  height: 90vh;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Div1 = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${background});
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`
const H1 = styled(motion.p)`
  @import url('https://fonts.googleapis.com/css2?family=Anton&display=swap');
  font-family: 'Anton';
  font-size:137px;
  color: white;
  height: 30%;
`

const H3 = styled(motion.h3)` 
  color: #0c1d33;
`

const Container = styled.div`
  display: flex;
  width: auto;
  padding: 50px;
  border: 1px solid white;
  border-radius: 10px;
  box-shadow: rgb(204, 219, 232) 3px 3px 6px 0px inset, rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset;
`

const Landing = () => {
  return (
    <Div
      initial='out'
      animate='in'
      exit='out'
      variants={animationOne}
      transition={transition}
    >
      <Div1>
        <H1
          cx={500}
          initial={{ opacity: 0}}
          animate={{ translateX: 200, opacity: 1 }}
          transition={{ duration: 3, times: [0, 0.3, 1] }}
        >KAKEIBO</H1>
        <H3
          cx={500}
          initial={{ opacity: 0}}
          animate={{ translateX: -200, opacity: 1 }}
          transition={{ duration: 3, times: [0, 0.2, 1] }}
        >
        save money and keep a simple budget
        </H3>
      </Div1>
    </Div>
  )
}

export default Landing 