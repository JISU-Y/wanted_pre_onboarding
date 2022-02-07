import React, { useCallback, useEffect, useRef, useState } from "react"
import styled from "styled-components"
import Header from "./common/Header"

const ClickToEdit = () => {
  // 수정 중 여부 state
  const [isEditing, setIsEditing] = useState({ name: false, age: false })
  // input에 보이는 text state
  const [inputData, setInputData] = useState({ name: "최해커", age: "20" })
  // 하단 결과에 보이는 text state
  const [formData, setFormData] = useState({ name: "최해커", age: "20" })
  // input과 div의 ref
  const itemRef = useRef(null)
  const inputRef = useRef(null)

  // div click 시
  const handleClick = (type) => setIsEditing((prev) => ({ ...prev, [type]: true }))

  // Click 시 input에 focus
  useEffect(() => {
    if (!inputRef.current) return
    inputRef.current.focus()
  }, [isEditing])

  // input의 바깥쪽 클릭 시 동작
  const handleClickOutside = useCallback(
    (e) => {
      if (inputRef.current && !inputRef.current.contains(e.target)) {
        // isEditing false로 변경
        setIsEditing({ name: false, age: false })
        // 하단 결과 div에 보여질 formData set
        setFormData((prev) => ({ ...prev, name: inputData.name, age: inputData.age }))
      }
    },
    [inputData] // inputData가 변경될 때마다 동작
  )

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside) // event 등록
    return () => {
      document.removeEventListener("mousedown", handleClickOutside) // event 구독 취소
    }
  }, [inputData.name, inputData.age, handleClickOutside])

  // set input value
  const handleNameChange = (e) => setInputData((prev) => ({ ...prev, name: e.target.value }))
  const handleAgeChange = (e) => setInputData((prev) => ({ ...prev, age: e.target.value }))

  return (
    <Container>
      <Header title="ClickToEdit" />
      <Item>
        <span>이름</span>
        {isEditing.name ? (
          <input ref={inputRef} type="name" onChange={handleNameChange} value={inputData.name} />
        ) : (
          <div ref={itemRef} onClick={() => handleClick("name")}>
            {inputData.name}
          </div>
        )}
      </Item>
      <Item>
        <span>나이</span>
        {isEditing.age ? (
          <input ref={inputRef} type="text" onChange={handleAgeChange} value={inputData.age} />
        ) : (
          <div ref={itemRef} onClick={() => handleClick("age")}>
            {inputData.age}
          </div>
        )}
      </Item>
      <div>
        이름 {formData.name} 나이 {formData.age}
      </div>
    </Container>
  )
}

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

const Item = styled.div`
  display: flex;
  margin-bottom: 30px;
  cursor: default;
  span {
    margin-right: 10px;
  }
  input {
    width: 150px;
    height: 30px;
    text-align: center;
  }
  div {
    width: 150px;
    height: 30px;
    border: 1px solid #c4c4c4;
    border-radius: 3px;
    text-align: center;
  }
`

export default ClickToEdit
