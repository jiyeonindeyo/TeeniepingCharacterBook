import { useState } from "react";
import type { Ping } from "../type";
import {  Button, Dialog, DialogActions, DialogContent, DialogTitle } from "@mui/material";
import PingDialogContents from "./PingDialogContents";
import { addPing } from "../api/PingApi";

type AddPingProps = {
    loadPingData: () => void;
}

export default function Addping({loadPingData}: AddPingProps) {
    //모달창 op/cl
    const [open, setOpen] = useState(false); 
    const [ping, setPing] = useState<Ping>({
        name: "",
        season: 0,
        tool: "",
        skill: ""
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {//HTML <input> 요소에서 발생한 변경 이벤트를 처리하는 함수

        const name = e.target.name;//어떤 입력창에(e.target은 이벤트가 발생한 입력창, name은 그냥 name=""속성)
        const value = e.target.value;//어떤 값을 넣었는지
        
        setPing({...ping, [name]: value})//넣은값으로 수정해서 새로운 객체 생성
    }

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleSave = async () => {
       // await charaterApi에서 addping 받아오기
       await addPing(ping);
       loadPingData();
       setPing({
            name: "",
            season: 1,
            tool: "",
            skill: "",
            image: ""
       });
       handleClose();
    };

    return (
        <>
            <Button
                sx={{
                    minWidth: 'unset', 
                    color: 'grey',             
                    '&:hover': {
                    color: 'red' 
                    }
                }}
                onClick={handleOpen}
            >
                티니핑 추가
            </Button>
            <Dialog 
                open={open} 
                onClose={handleClose}
                maxWidth="sm"
                fullWidth
            >
                <DialogTitle>티니핑 추가</DialogTitle>
                <DialogContent>
                    <PingDialogContents
                        ping={ping}
                        handleChange={handleChange}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleSave}>저장</Button>
                    <Button onClick={handleClose}>취소</Button>
                </DialogActions>
            </Dialog>
        </>
    )
}