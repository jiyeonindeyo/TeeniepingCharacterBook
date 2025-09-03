import { AppBar, Container, Toolbar, Typography } from "@mui/material"
import MainPage from "./pages/MainPage"


function App() {
  /*header*/
  //페이지 name
  //내비게이션 바


  return (
    <>
      <Container>
        <AppBar>
          <Toolbar>
            <Typography variant="h5">티니핑월드</Typography>
          </Toolbar>
        </AppBar>
        <MainPage />
      </Container>
    </>
  )
}

export default App
