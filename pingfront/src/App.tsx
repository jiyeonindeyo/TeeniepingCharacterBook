import { AppBar, Box, Container, Toolbar, Typography } from "@mui/material"
import MainPage from "./pages/MainPage"
import './App.css'

function App() {
  /*header*/
  //페이지 name
  //내비게이션 바


  return (
    <>
      <Container >
        <AppBar
          sx={{
            backgroundColor: '#fbafc9ff',
            height: '100px',
            display: 'flex',
            justifyContent: 'center',
          }}
          elevation={1}
        >
          <Toolbar >
            <Typography variant="h4" sx={{ fontWeight: 'bold', mr: 3}}>티니핑 월드</Typography>
            <Box sx={{ display: 'flex', gap: 2 }}>
              <Typography>티니핑 월드1</Typography>
              <Typography>티니핑 월드2</Typography>
              <Typography>티니핑 월드3</Typography>
            </Box>
          </Toolbar>
        </AppBar>
        <MainPage />
      </Container>
    </>
  )
}

export default App
