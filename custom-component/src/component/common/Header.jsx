import React from "react"
import styled from "styled-components"

const Header = ({ title }) => {
  return (
    <HeaderContainer>
      <h2>{title}</h2>
    </HeaderContainer>
  )
}

const HeaderContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 5px 20px;
  h2 {
    margin: 0;
    text-align: left;
  }
`

export default Header
