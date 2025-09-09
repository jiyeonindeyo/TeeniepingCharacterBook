import { Button, Snackbar, Stack, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import type { User } from "../type";
import { signUp } from "../api/LoginApi";

export default function SignUpPage() {
    const navigate = useNavigate();//페이지 이동 기능(react-router-dom의 useNavigate 훅을 사용)
    const [toastOpen, setToastOpen] = useState(false);//Snackbar(로그인 실패시 보여줌)의 열림 여부를 상태로 관리
    const [user, setUser] = useState<User>({//사용자 입력값(아이디와 비밀번호)을 저장하는 상태
        userName: '',
        password: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUser({...user, [e.target.name]: e.target.value});
    }//입력 필드의 값이 변경될 때마다 user 상태를 업데이트


    const handleSign = () => {
        signUp(user)
        navigate("/");//- 회원가입 성공 시 홈 페이지로 이동        
    }

    return(
        <>
        <Stack spacing={2} mt={2} alignItems={"center"}>
            <Typography>회원가입</Typography>
            <TextField 
                label="ID"
                name="userName"
                onChange={handleChange}
            />
            <TextField 
                label="PW"
                name="password"
                type="password"
                onChange={handleChange}
            />
            <Button
                color="error"
                onClick={handleSign}
            >
                가입하기
            </Button>
            <Snackbar
                open={toastOpen}
                autoHideDuration={3000}
                onClose={() => setToastOpen(false)}
                message="회원가입 실패"
            />
        </Stack>
        </>
    );
}