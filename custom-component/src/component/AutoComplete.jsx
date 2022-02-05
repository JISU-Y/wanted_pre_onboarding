import React, { useState } from "react"
import styled from "styled-components"
import Header from "./common/Header"

const data = ["antique", "vintage", "중고A급", "rustic", "refurbished"]

const AutoComplete = () => {
  const [results, setResults] = useState([])
  const [text, setText] = useState("")

  const searchWord = (word) => {
    setText(word)
    if (word === "") {
      setResults([])
      return
    }
    setResults(data.filter((el) => el.includes(word) || el.includes(word.toUpperCase())))
  }

  return (
    <>
      <Header title="AutoComplete" />
      <Container>
        <SearchContainer noResults={!results.length}>
          <input type="text" onChange={(e) => searchWord(e.target.value)} value={text} />
          <button onClick={() => setText("")}>✖</button>
          {results.map((result) => (
            <Result key={result}>{result}</Result>
          ))}
        </SearchContainer>
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

const SearchContainer = styled.div`
  width: 100%;
  max-width: 640px;
  border: 1px solid #c4c4c4;
  border-radius: 10px;
  position: relative;
  box-shadow: 0px 5px 5px 3px rgba(0, 0, 0, 0.3);
  overflow: hidden;
  input {
    width: 100%;
    padding: 8px 10px;
    font-size: 18px;
    border: none;
    border-bottom: ${(props) => (props.noResults ? "none" : "1px solid #c4c4c4")};
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }
  input:focus {
    outline: none;
  }
  button {
    position: absolute;
    top: 9px;
    right: 5px;
    border: none;
    background: none;
    font-size: 12px;
    cursor: pointer;
  }
  & div:nth-child(3) {
    margin-top: 5px;
  }
  & div:last-child {
    margin-bottom: 5px;
  }
`

const Result = styled.div`
  padding: 0 10px;
  background-color: white;
  transition: background 0.3s ease-in;
  &:hover {
    background-color: #e4e4e4;
  }
`

export default AutoComplete
