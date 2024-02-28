import { Container } from "@mui/material"
import Tabhome from "../components/tabhome"
import AccountMenu from "../components/accountmenu"

function Home() {
  return (
    <>
    <Container sx={{marginTop: '3rem'}}>
      <AccountMenu/>
      <br/>
      <Tabhome/>
    </Container>
    </>
  )
}

export default Home