import React, { useEffect, useState } from "react"
import styled from "styled-components"
import Header from "./common/Header"

const menu = ["Tab1", "Tab2", "Tab3"]

const Tab = () => {
  const [currentMenu, setCurrentMenu] = useState(-1)
  const [currentContent, setCurrentContent] = useState(null)

  const handleClick = (index) => setCurrentMenu(index)

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
    <>
      <Header title="Tab" />
      <Container>
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

const TabContainer = styled.div`
  width: 100%;
  max-width: 640px;
  height: 200px;
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
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  font-size: 18px;
`

export default Tab
