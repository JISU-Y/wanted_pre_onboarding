import React, { useState } from "react"
import styled from "styled-components"
import Header from "./common/Header"

const Modal = () => {
  // Modal show 여부 state
  const [showModal, setShowModal] = useState(false)

  return (
    <Container>
      <Header title="Modal" />
      <Button onClick={() => setShowModal(true)}>Open Modal</Button>
      {/* showModal 이 true 일 때만 Modal 보여줌 */}
      {showModal && (
        <ModalBackground>
          {/* 실제 modal content가 들어가는 부분 */}
          <ModalContent>
            <button onClick={() => setShowModal(false)}>✖</button>
            <p>HELLO CODESTATES!</p>
          </ModalContent>
        </ModalBackground>
      )}
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  position: relative;
  border: 2px solid gray;
  border-radius: 5px;
  margin: 2px 0;
  padding: 10px 20px;
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
  /* 가장 상위에서 보이도록 viewport에서 modal 나타냄 */
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 5;
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
