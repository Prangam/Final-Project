import { Button, Container } from "@mui/material"
 
function Start() {
  return (
    <div id="start">
    <Container sx={{textAlign: "center"}}>
      <h1 >Boost Your Digital Education Online</h1>
      <br/>
      <Button style={{
        borderRadius: 35,
        backgroundColor: "#21b6ae",
        padding: "18px 36px",
        fontSize: "18px"
    }} variant="contained" href="/#/home">
        Get Started 
      </Button>
      </Container>
    </div>
  )
}

export default Start