import React, { useEffect, useState } from "react"
import styled from "styled-components"
import Header from "./common/Header"

const menu = ["Tab1", "Tab2", "Tab3"]

const Tab = () => {
  // 현재 menu 위치
  const [currentMenu, setCurrentMenu] = useState(-1)
  // 현재 보여질 content component
  const [currentContent, setCurrentContent] = useState(null)

  // 클릭 시 menu의 index에 따라 currentMenu가 정해짐
  const handleClick = (index) => setCurrentMenu(index)

  // currentMenu가 바뀔 때마다 currentContent를 변화시킴
  useEffect(() => {
    setCurrentContent(
      <span>
        {currentMenu === 0
          ? "Tab menu ONE"
          : currentMenu === 1 //
          ? "Tab menu TWO"
          : "Tab menu THREE"}
      </span>
    )
  }, [currentMenu])

  return (
    <Container>
      <Header title="Tab" />
      <TabContainer>
        <TabWrap>
          <Holder />
          {menu.map((el, index) => (
            <Menu key={el} onClick={() => handleClick(index)} isActive={currentMenu === index}>
              {el}
            </Menu>
          ))}
        </TabWrap>
        <ContentsWrap>{currentContent}</ContentsWrap>
      </TabContainer>
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

const TabContainer = styled.div`
  width: 100%;
  max-width: 640px;
`

const TabWrap = styled.div`
  display: flex;
  width: 100%;
  font-weight: bold;
`

const Holder = styled.div`
  width: 50px;
  background-color: #e3e3e3;
`

const Menu = styled.div`
  width: calc(100% / 3);
  background-color: ${(props) => (props.isActive ? "purple" : "#e3e3e3")};
  color: ${(props) => (props.isActive ? "white" : "#BCBCBC")};
  padding: 15px 10px;
  cursor: pointer;
  transition: all 0.3s linear;
`

const ContentsWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  font-size: 18px;
`

export default Tab
