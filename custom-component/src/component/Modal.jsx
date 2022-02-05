import React, { useState } from "react"
import styled from "styled-components"
import Header from "./common/Header"

const Modal = () => {
  const [showModal, setShowModal] = useState(false)

  return (
    <>
      <Header title="Modal" />
      <Container>
        <Button onClick={() => setShowModal(true)}>Open Modal</Button>
        {showModal && (
          <ModalBackground>
            <ModalContent>
              <button onClick={() => setShowModal(false)}>X</button>
              <p>HELLO CODESTATES!</p>
            </ModalContent>
          </ModalBackground>
        )}
      </Container>
    </>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`

const Button = styled.button`
  padding: 20px;
  background-color: purple;
  border-radius: 40px;
  color: white;
  border: none;
  cursor: pointer;
`

const ModalBackground = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(128, 128, 128, 0.5);
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const ModalContent = styled.div`
  width: 400px;
  height: 100px;
  background-color: white;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  button {
    margin: 5px auto 0;
    border: none;
    background: none;
    font-weight: bold;
    cursor: pointer;
  }
  p {
    text-align: center;
    margin: auto 0;
    font-size: 20px;
    font-weight: bold;
    color: purple;
  }
`

export default Modal
