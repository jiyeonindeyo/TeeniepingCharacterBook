import type { Ping } from "../type";
import { useState } from "react";
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, IconButton, Tooltip } from "@mui/material";
import PingDialogContents from "./PingDialogContents";
import EditIcon from '@mui/icons-material/Edit';
import { editping } from "../api/PingApi";

type EditPingProps = {
    item: Ping;
    loadPingData: () => void;
}

export default function EditPing({item, loadPingData}: EditPingProps){
    const [open, setOpen] = useState(false);
    const [ping, setPing] = useState<Ping>({
        id: 0,
        name: "",
        season: 0,
        tool: "",
        skill: ""
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;//어떤 값을 넣었는지
        const name = e.target.name;//어떤 입력창에
        setPing({...ping, [name]: value})//수정후 새객체
    }

    // Box 클릭 시 모달 열기
    const handleOpen = () => {
        setPing({
            id: item.id,
            name: item.name,
            season: item.season,
            tool: item.tool,
            skill: item.skill
        });
        setOpen(true);
    };
    const handleClose = () => {setOpen(false)};

    const handleSave = async () => {
        await editping(ping);
        // car list reload => 부모에게 받아와야함 -> 매개변수로 받아와서 사용
        loadPingData(); //updateCar()에 대한 신호가 온 뒤 loadCarData() 실행됨
        setPing({
            id: 0,
            name: "",
            season: 0,
            tool: "",
            skill: ""
        });
        handleClose(); //모달 창 닫기
    }

    return (
        <>
            {/* 모달 Dialog */}
            <Tooltip title='수정'>
                <IconButton size='small' onClick={handleOpen}>
                    <EditIcon/>
                </IconButton>
            </Tooltip>
            <Dialog 
                open={open} 
                onClose={handleClose}
                maxWidth="sm"
                fullWidth
            >
                <DialogTitle>{ping.name}</DialogTitle>
                <DialogContent>
                    <PingDialogContents 
                        ping={ping} 
                        handleChange={handleChange}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>취소</Button>
                    <Button onClick={handleSave} variant="contained">저장</Button>
                </DialogActions>
            </Dialog>
        </>
    );
}