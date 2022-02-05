import React, { useCallback, useEffect, useRef, useState } from "react"
import styled from "styled-components"
import Header from "./common/Header"

const ClickToEdit = () => {
  const [isEditing, setIsEditing] = useState({ name: false, age: false })
  const [inputData, setInputData] = useState({ name: "최해커", age: "20" })
  const [formData, setFormData] = useState({ name: "최해커", age: "20" })
  const itemRef = useRef(null)
  const inputRef = useRef(null)

  const handleClick = (type) => setIsEditing((prev) => ({ ...prev, [type]: true }))

  useEffect(() => {
    if (!inputRef.current) return
    inputRef.current.focus()
  }, [isEditing])

  // const handleSetItems = () => {
  //   setIsEditing({ name: false, age: false })
  //   console.log(inputData)

  //   setFormData((prev) => ({ ...prev, name: inputData.name, age: inputData.age }))
  // }

  const handleClickOutside = useCallback(
    (e) => {
      if (inputRef.current && !inputRef.current.contains(e.target)) {
        // handleSetItems
        setIsEditing({ name: false, age: false })
        setFormData((prev) => ({ ...prev, name: inputData.name, age: inputData.age }))
      }
    },
    [inputData]
  )

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [inputData.name, inputData.age, handleClickOutside])

  const handleNameChange = (e) => setInputData((prev) => ({ ...prev, name: e.target.value }))
  const handleAgeChange = (e) => setInputData((prev) => ({ ...prev, age: e.target.value }))

  return (
    <>
      <Header title="ClickToEdit" />
      <Container>
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
