import React, { useState } from "react"
import styled from "styled-components"
import Header from "./common/Header"
import { nanoid } from "nanoid"

const Tag = () => {
  // tag list의 state
  const [tags, setTags] = useState(null)
  // input text state
  const [text, setText] = useState("")

  // enter 시 submit 동작
  const handleSubmit = (e) => {
    e.preventDefault()
    // input의 text를 tags 요소 중 value로 설정, 그의 id는 nanoid 생성
    // tags가 아무것도 없을 때는 하나만 생성 (prev가 non iterable 하므로)
    setTags((prev) =>
      tags
        ? [{ value: e.target[0].value, id: nanoid() }, ...prev] //
        : [{ value: e.target[0].value, id: nanoid() }]
    )
    // input 초기화
    setText("")
  }

  // tag 삭제 (id이용 삭제)
  const deleteTag = (id) => setTags((prev) => prev.filter((el) => el.id !== id))

  return (
    <Container>
      <Header title="Tag" />
      <InputContainer onSubmit={handleSubmit}>
        <input type="text" placeholder="Press enter to add tags" value={text} onChange={(e) => setText(e.target.value)} />
        {tags?.map((tag) => (
          <TagContent key={tag.id}>
            {tag.value}
            <button type="button" onClick={() => deleteTag(tag.id)}>
              x
            </button>
          </TagContent>
        ))}
      </InputContainer>
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

const InputContainer = styled.form`
  width: 100%;
  max-width: 640px;
  border: 1px solid #c4c4c4;
  border-radius: 5px;
  padding: 10px;
  display: flex;
  flex-direction: row-reverse;
  justify-content: flex-end;
  overflow: hidden;
  cursor: default;
  input {
    border: none;
    padding: 8px 10px;
    font-size: 16px;
  }
  input:focus {
    outline: none;
  }
`

const TagContent = styled.div`
  background-color: purple;
  color: white;
  border-radius: 5px;
  padding: 8px 10px;
  margin-right: 10px;
  font-size: 16px;
  min-width: fit-content;
  button {
    width: 18px;
    height: 18px;
    font-size: 14px;
    background-color: white;
    border: none;
    border-radius: 50%;
    margin-left: 5px;
  }
`

export default Tag
