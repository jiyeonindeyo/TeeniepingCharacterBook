import { AppBar, Box, Button, Container, Tab, Tabs, Toolbar, Typography } from "@mui/material"
import MainPage from "./pages/MainPage"
import './App.css'
import { Navigate, Route, Routes, useNavigate } from "react-router-dom"
import Login from "./pages/Login"
import type { JSX } from "react"
import { useAuthStore } from "./store"

type PrivateRouteProps ={
  children: JSX.Element;
}


function PrivateRoute({children}: PrivateRouteProps) {//children: 이 컴포넌트 안에 감싸진 JSX 요소들

  const {isAuthenticated} = useAuthStore();

  return isAuthenticated ? children : <Navigate to="/login" replace />;//replace: 브라우저 히스토리에서 현재 페이지를 로그인 페이지로 대체하므로, 뒤로 가기를 눌러도 다시 돌아오지 않음

}

export default function App() {
  const navigate = useNavigate();
  const {logout} = useAuthStore();

  const handleLogin = () => {
    navigate("/login"); // Login.tsx가 연결된 경로
  };

  const handleLogout = () => {
        sessionStorage.setItem("jwt", "");
        logout();
    }

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
            <Tabs sx={{ display: 'flex', gap: 2 }}>
              <Tab label="시즌 1">navigate("/season1")</Tab>
              <Tab label="시즌 2"></Tab>
              <Tab label="시즌 3"></Tab>
            </Tabs>
            <Box sx={{ display: 'flex', gap: 2, ml: 'auto'}}>
                <Button
                  sx={{
                    color: 'white',             
                    '&:hover': {
                    color: 'red' 
                    }
                  }}
                  onClick={handleLogin}
                >
                  로그인</Button>
                <Button
                  sx={{
                    color: 'white',             
                    '&:hover': {
                    color: 'red' 
                    }
                  }}
                  onClick={handleLogout}
                >
                  로그아웃</Button>
              </Box>
          </Toolbar>
        </AppBar>
        <Routes>
          <Route path="/" element={<PrivateRoute><MainPage /></PrivateRoute>} />
          <Route path="/login" element={<Login/>} />
        </Routes>
        
      </Container>
    </>
  )
}

