import React, { useState } from "react"
import styled from "styled-components"
import Header from "./common/Header"

// database
const data = ["antique", "vintage", "중고A급", "rustic", "refurbished"]

const AutoComplete = () => {
  // filter 후 결과가 담길 state
  const [results, setResults] = useState([])
  // input text state
  const [text, setText] = useState("")

  // 단어 찾기
  const searchWord = (word) => {
    // input value set
    setText(word)
    // 단어가 빈 문자열 일 시 results initial state로 변경 후 filtering 동작하지 못하도록 early return
    if (word === "") {
      setResults([])
      return
    }
    // 단어 포함 여부 filter (대소문자 구분없이)
    setResults(data.filter((el) => el.includes(word) || el.includes(word.toUpperCase())))
  }

  return (
    <Container>
      <Header title="AutoComplete" />
      <SearchContainer noResults={!results.length}>
        <input type="text" onChange={(e) => searchWord(e.target.value)} value={text} />
        <button onClick={() => setText("")}>✖</button>
        {results.map((result) => (
          <Result key={result}>{result}</Result>
        ))}
      </SearchContainer>
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
    /* 결과가 아무것도 없을 때 input의 border 삭제 */
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
