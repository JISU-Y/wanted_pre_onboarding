import "./App.css"
import Toggle from "./component/Toggle"
import Modal from "./component/Modal"
import Tab from "./component/Tab"
import Tag from "./component/Tag"
import AutoComplete from "./component/AutoComplete"
import ClickToEdit from "./component/ClickToEdit"
import styled from "styled-components"

function App() {
  return (
    <Container className="App">
      <Toggle />
      <Modal />
      <Tab />
      <Tag />
      <AutoComplete />
      <ClickToEdit />
    </Container>
  )
}

const Container = styled.div`
  width: 100%;
  max-width: 640px;
  margin: auto;
`

export default App
