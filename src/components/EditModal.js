import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { MdClose } from 'react-icons/md';
import { useSpring, animated } from 'react-spring';

const Container = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;  
  z-index: 5;
`

const Form = styled.form`
  position: relative;
  border-radius: 10px;
  width: 50%; 
  max-width: 400px;
  max-height: 500px;
  background-color: white;
  min-width: 300px;
  min-height: 400px;
  height: 50%; 
  display: flex;
  flex-direction: column; 
  justify-content: space-evenly;
  align-items: center;
  z-index: 10;
  padding: 15px;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 18px 50px -10px;
  `

  const CloseModalButton = styled(MdClose)`
  cursor: pointer;
  position: absolute;
  top: -40px;
  right: -40px;
  color: white;
  width: 32px;
  height: 32px;
  padding: 0;
  z-index: 10;
`;

const Input = styled.input`
  box-sizing: border-box;
  padding: 15px;
  width: 100%;
  border-radius: 10px;
  outline: none;
  border: none;
  box-shadow: rgba(0, 0, 0, 0.06) 0px 2px 4px 0px inset;
  `

const Select = styled.select`
  box-sizing: border-box;
  padding: 15px;
  width: 100%;
  border-radius: 10px;
  outline: none;
  border: none;
  box-shadow: rgba(0, 0, 0, 0.06) 0px 2px 4px 0px inset;
`

const Button = styled.button`
  box-sizing: border-box;
  width: 100%;   
  border: none;
  border-radius: 4px;
  padding: 16px 32px;
  background-color: #141414;;
  color: #fff;
  cursor: pointer;
`

const EditModal = ({ user, id, setShowModal, showModal }) => {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [type, setType] = useState('')
    const [cost, setCost] = useState('')

    useEffect(() => {
      
    })


    const animation = useSpring({
      config: {
        duration: 250
      },
      opacity: showModal ? 1 : 0,
      transform: showModal ? `translateY(0%)` : `translateY(-100%)`
    });

    const handleSubmit = () => {
      console.log('submitted')
    }
  return (
    <>
    { showModal ? <Container>
        <animated.div style={animation}>
        <Form onSubmit={handleSubmit}>
          <CloseModalButton
            aria-label='Close modal'
            onClick={() => setShowModal(false)}
          />
          <Input onChange={(e) => setTitle(e.target.value)} value={title} name="title" type="text" placeholder="title"/>
          <Input onChange={(e) => setDescription(e.target.value)} value={description} name="description" type="text" placeholder="description"/>
          <Input onChange={(e) => setCost(e.target.value)} value={cost} name="cost" type="text" pattern="[0-9]*" placeholder="cost" />
          <Select value={type} onChange={(e) => setType(e.target.value)}> 
            <option value="" disabled selected>Select type</option>
            <option name="need">Need</option>
            <option name="want">Want</option>
            <option name="cultural"> Cultural</option>
            <option name="unexpected">Unexpected</option>
          </Select>
          <Button type="submit">Submit</Button>
          <Button >Cancel</Button>
        </Form>
        </animated.div>
      </Container> : null}
    </>
  )
}

export default EditModal 