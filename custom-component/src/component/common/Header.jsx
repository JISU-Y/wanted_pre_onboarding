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
  width: 100%;
  h2 {
    margin: 0;
    text-align: left;
  }
`

export default Header
