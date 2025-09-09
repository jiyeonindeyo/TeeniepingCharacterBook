import type { Ping } from "../type";
import { useState } from "react";
import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from "@mui/material";
import PingDialogContents from "./PingDialogContents";
import { editPing } from "../api/PingApi";

type EditPingProps = {
    item: Ping;
    loadPingData: () => void;
}

export default function EditPing({item, loadPingData}: EditPingProps){
    const [open, setOpen] = useState(false);
    const [ping, setPing] = useState<Ping>({
        id: 0,
        name: "",
        season: 1,
        tool: "",
        skill: "",
        image: ""
    });
    const [selectedFileName, setSelectedFileName] = useState<File | null>(null);
    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setSelectedFileName(file);
            // 여기서 파일 데이터를 상위로 전달하거나 상태로 저장할 수 있음
            console.log("[수정] 선택된 파일:", file);
        }
    };

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
            skill: item.skill,
            image: item.image
        });
        setOpen(true);
    };
    const handleClose = () => {setOpen(false)};

    const handleSave = async () => {
        const formData = new FormData();
        formData.append("ping", new Blob([JSON.stringify(ping)], {type: "application/json"}));
        if(selectedFileName) {
            formData.append("file", selectedFileName);
        }
        await editPing(formData);
        // car list reload => 부모에게 받아와야함 -> 매개변수로 받아와서 사용
        loadPingData(); //updateCar()에 대한 신호가 온 뒤 loadCarData() 실행됨
        setPing({
            name: "",
            season: 1,
            tool: "",
            skill: "",
            image: ""
        });
        handleClose(); //모달 창 닫기
    }

    return (
        <>
            {/* 모달 Dialog */}
            <Button 
                //버튼 색, hover , 크기
                sx={{
                    minWidth: 'unset',
                    width: '40px',
                    color: 'grey',             
                    '&:hover': {
                    color: '#FF4C4C' 
                    }
                }}
                size="small" 
                onClick={handleOpen}>
                수정</Button>
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
                        selectedFileName={selectedFileName}
                        handleFileChange={handleFileChange}
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