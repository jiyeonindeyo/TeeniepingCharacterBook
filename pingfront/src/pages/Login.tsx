// import { Button, Snackbar, Stack, TextField } from "@mui/material";
// import { useNavigate } from "react-router-dom";

// export default function Login(){

//     const navigate = useNavigate();


//     return(
//         <>
//         <Stack spacing={2} mt={2} alignItems={"center"}>
//             <TextField 
//                 label="ID"
//                 name="username"
//                 onChange={handleChange}
//             />
//             <TextField 
//                 label="PW"
//                 name="password"
//                 onChange={handleChange}
//             />
//             <Button
//                 color="primary"
//                 onClick={handleLogin}
//             >
//                 로그인
//             </Button>
//             <Snackbar
//                 open={toastOpen}
//                 autoHideDuration={3000}
//                 onClose={() => setToastOpen(false)}
//                 message="로그인 실패"
//             />
//         </Stack>
//         </>
//     );
// }