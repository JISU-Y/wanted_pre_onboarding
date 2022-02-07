import React from "react"
import styled from "styled-components"
import Header from "./common/Header"

const Toggle = () => (
  <Container>
    <Header title="Toggle" />
    <Wrap>
      {/* checkbox input (보이지 않음) */}
      <input type="checkbox" id="button" />
      {/* 실제로 input check를 대신하는 보여지는 label
      Switch rail 모양, 흰색 버튼 모양 나타냄 */}
      <Switch htmlFor="button" />
      {/* Toggle Switch ON/OFF 나타냄 */}
      <p></p>
    </Wrap>
  </Container>
)

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  position: relative;
  border: 2px solid gray;
  border-radius: 5px;
  margin: 2px 0;
  padding: 10px 20px;
`

// switch container (버튼 및 버튼 rail 모양)
const Switch = styled.label`
  display: block;
  width: 100px;
  height: 50px;
  border-radius: 25px;
  padding: 5px;
  position: relative;
  transform: translateX(0);
  background-color: gray;
  overflow: hidden;
  // 흰색 동그라미 버튼
  &::after {
    content: "";
    width: 40px;
    height: 40px;
    position: absolute;
    top: 5px;
    left: 5px;
    background-color: white;
    border-radius: 50%;
    cursor: pointer;
    transition: all 0.5s linear;
    z-index: 1;
  }
  /* 배경 */
  &::before {
    content: "";
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    transform: translateX(-100%);
    background-color: purple;
    transition: all 0.5s linear;
  }
`

// 버튼과 글씨
const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /*  실제 input은 보이지 않게 */
  input[type="checkbox"] {
    display: none;
  }
  /* click 되었을 때(checkbox가 check 되었을 때) Switch */
  input[type="checkbox"]:checked ~ label {
    /* switch에서 동그란 버튼 위치 오른쪽으로 옮김 */
    &::after {
      left: 55px;
    }
    /* 배경도 오른쪽으로 옮김 */
    &::before {
      transform: translateX(0);
    }
  }
  /* Toggle Switch 글 default OFF */
  p::after {
    content: "Toggle Switch OFF";
  }
  /* check 되었을 때는 ON */
  input[type="checkbox"]:checked ~ p {
    &::after {
      content: "Toggle Switch ON";
    }
  }
`

export default Toggle
