import React, { useState } from "react"
import styled from "styled-components"
import Header from "./common/Header"

const Toggle = () => {
  const [toggle, setToggle] = useState(false)

  const handleClick = () => setToggle((prev) => !prev)

  return (
    <>
      <Header title="Toggle" />
      <Container>
        <Wrap>
          <input type="checkbox" id="button" />
          <Circle htmlFor="button" onClick={handleClick} />
          <Background />
        </Wrap>
        <p>Toggle Switch {toggle ? "ON" : "OFF"}</p>
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

const Wrap = styled.div`
  width: 100px;
  background-color: gray;
  border-radius: 25px;
  padding: 5px;
  position: relative;
  overflow: hidden;
  input[type="checkbox"] {
    display: none;
  }
  input[type="checkbox"]:checked ~ label {
    transform: translateX(60px);
  }
  input[type="checkbox"]:checked ~ div {
    left: 0;
  }
`

const Circle = styled.label`
  display: block;
  width: 40px;
  height: 40px;
  position: relative;
  background-color: white;
  border-radius: 50%;
  cursor: pointer;
  transform: translateX(0);
  transition: all 0.5s linear;
  z-index: 1;
`

const Background = styled.div`
  width: 120px;
  height: 50px;
  background-color: purple;
  position: absolute;
  top: 0;
  left: -120px;
  transition: all 0.5s linear;
`

export default Toggle
