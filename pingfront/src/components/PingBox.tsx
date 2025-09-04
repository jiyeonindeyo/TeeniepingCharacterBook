import { Box, Button, Stack, Typography } from "@mui/material";
import EditPing from "./EditPing";
import type { Ping } from "../type";
import { useState } from "react";

type PingBoxProps = {
    data: Ping[];
    loadPingData: () => void;
}

export default function PingBox({data, loadPingData}: PingBoxProps){
    const data1 =[{
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

    const [isEditOpen, setIsEditOpen] = useState(false);
    
    const handleClick = () => {
        setIsEditOpen(true);
    }

    return(
        <>
            <Stack direction="row" spacing={2}>
                {data1.map((item) => (
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
                        <Button onClick={handleClick}>수정</Button>
                        {isEditOpen && <EditPing item={item} loadPingData={loadPingData} />}
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
            
        </>
    );
}