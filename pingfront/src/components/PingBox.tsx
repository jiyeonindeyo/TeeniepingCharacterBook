import { Box, Button, Snackbar, Stack, Typography } from "@mui/material";
import EditPing from "./EditPing";
import type { Ping } from "../type";
import { useState } from "react";
import { deletePing} from "../api/PingApi";

type PingBoxProps = {
    data: Ping[];
    loadPingData: () => void;
}

export default function PingBox({data, loadPingData}: PingBoxProps){

    const [toastVal, setToastVal] = useState({
        open: false, msg: '',
    })
    // const data1 =[{
    //     id: 1,
    //     name: "예주",
    //     season: 1,
    //     tool: "도구1",
    //     skill: "스킬1"
    // },
    // {
    //     id: 2,
    //     name: "지연",
    //     season: 2,
    //     tool: "도구2",
    //     skill: "스킬3"
    // }];

    const deletePingData = (id: number) => {
        if(confirm(`${id}번 데이터를 삭제하겠습니까?`)){
            deletePing(id)
        .then(res => {
            loadPingData();
            setToastVal({open: true, msg: `${res}번 데이터가 삭제되었습니다.`})
        })
        .catch(err => console.log(err));
        }
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
                    <Box sx={{ display: 'flex', justifyContent: 'flex-end', ml: 7 }}>
                        <EditPing item={item} loadPingData={loadPingData} />
                        <Button 
                            sx={{
                                minWidth: 'unset', 
                                width: '40px',
                                color: 'grey',             
                                '&:hover': {
                                color: '#FF4C4C' 
                                }
                            }}
                            size="small"
                            onClick={() => deletePingData(item.id!)}
                            >삭제</Button>
                    </Box>
                    <img width={180} height={170} src={`${item.name}.png`} />
                    <Typography><strong>이름:</strong> {item.name}</Typography>
                    <Typography><strong>시즌:</strong> {item.season}</Typography>
                    <Typography><strong>도구:</strong> {item.tool}</Typography>
                    <Typography><strong>스킬:</strong> {item.skill}</Typography>
                </Box>
                ))}
            </Stack>
            <Snackbar
                open={toastVal.open}
                onClose={() => setToastVal({open: false, msg: ''})}
                message={toastVal.msg}
                autoHideDuration={2000}

            />
            
        </>
    );
}