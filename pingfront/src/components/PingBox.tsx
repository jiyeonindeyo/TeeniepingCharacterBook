import { Box, Stack, Typography } from "@mui/material";
import PingDialogContents from "./PingDialogContents";
import type { Ping } from "../type";
import { useState } from "react";

export default function PingBox(){


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
    },
    {
        id: 3,
        name: "현주쌤",
        season: 3,
        tool: "도구3",
        skill: "큐티"
    }];

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
                    onClick={PingDialogContents({ item, handleChange })}
                >
                    
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