import React, { useState } from "react"
import styled from "styled-components"
import Header from "./common/Header"
import { nanoid } from "nanoid"

const Tag = () => {
  const [tags, setTags] = useState(null)
  const [text, setText] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    setTags((prev) =>
      tags
        ? [{ value: e.target[0].value, id: nanoid() }, ...prev] //
        : [{ value: e.target[0].value, id: nanoid() }]
    )
    setText("")
  }

  const deleteTag = (id) => setTags((prev) => prev.filter((el) => el.id !== id))

  return (
    <>
      <Header title="Tag" />
      <Container>
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
