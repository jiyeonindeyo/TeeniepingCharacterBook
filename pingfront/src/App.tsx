import { AppBar, Box, Button, Container, Toolbar, Typography } from "@mui/material"
import MainPage from "./pages/MainPage"
import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import PingBox from "./components/PingBox"



// url 이동
// function PrivateRoute() {
//   return <Navigate to="/login" replace />;
// }






export default function App() {
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
          position="static"
        >
          <Toolbar >
            <Typography variant="h4" sx={{ fontWeight: 'bold', mr: 3}}>티니핑 월드</Typography>
            <Box sx={{ display: 'flex', gap: 2 }}>
              <BrowserRouter>
                <Routes>
                  <Route path="/season/:id" element={<PingBox />} />
                </Routes>
              </BrowserRouter>

              <Typography>시즌 1</Typography>
              <Typography>시즌 2</Typography>
              <Typography>시즌 3</Typography>
            </Box>
            <Box sx={{ display: 'flex', gap: 2, ml: 'auto' }}>
                <Button >로그인</Button>
                <Button>로그아웃</Button>
              </Box>
          </Toolbar>
        </AppBar>
        <Toolbar/>
        <MainPage />
      </Container>
    </>
  )
}

