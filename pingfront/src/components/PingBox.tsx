import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, Stack, Typography } from "@mui/material";
import PingDialogContents from "./PingDialogContents";
import type { Ping } from "../type";
import { useState } from "react";

export default function PingBox(){
    // 모달 열림/닫힘 상태
    const [isDialogOpen, setIsDialogOpen] = useState(false);

    const [ping, setPing] = useState<Ping>({
        name: "",
        season: 0,
        tool: "",
        skill: ""
    });

    const data =[{
        id: 1,
        name: "예주",
        season: 1,
        tool: "도구1",
        skill: "스킬1"
    },
    {
        id: 2,
        name: "지연",
        season: 2,
        tool: "도구2",
        skill: "스킬3"
    }];

    // Box 클릭 시 모달 열기
    const handleBoxClick = (item: Ping) => {
        setPing(item); // 선택된 아이템으로 ping 상태 업데이트
        setIsDialogOpen(true); // 모달 열기
    };

    // 모달 닫기
    const handleCloseDialog = () => {
        setIsDialogOpen(false);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;//어떤 값을 넣었는지
        const name = e.target.name;//어떤 입력창에
        setPing({...ping, [name]: value})//수정후 새객체
    }

    return(
        <>
            <Stack direction="row" spacing={2}>
                {data.map((item) => (
                <Box
                    key={item.id}
                    sx={{
                    width: '180px',
                    border: '1px solid #ccc',
                    borderRadius: '8px',
                    padding: '16px',
                    backgroundColor: '#fdfdfd',
                    }}
                    
                >
                    <Box sx={{ display: 'flex', ml: 7 }}>
                        <Button onClick={() => handleBoxClick(item)}>수정</Button>
                        <Button>삭제</Button>
                    </Box>
                    
                    <img width={180} height={170} src={`${item.name}.png`} />
                    <Typography><strong>이름:</strong> {item.name}</Typography>
                    <Typography><strong>시즌:</strong> {item.season}</Typography>
                    <Typography><strong>도구:</strong> {item.tool}</Typography>
                    <Typography><strong>스킬:</strong> {item.skill}</Typography>
                    
                </Box>
                ))}
            </Stack>
            {/* 모달 Dialog */}
            <Dialog 
                open={isDialogOpen} 
                onClose={handleCloseDialog}
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
                    <Button onClick={handleCloseDialog}>취소</Button>
                    <Button onClick={handleCloseDialog} variant="contained">
                        저장
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    );
}