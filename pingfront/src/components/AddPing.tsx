import { useState } from "react";
import type { Ping } from "../type";
import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from "@mui/material";
import PingDialogContents from "./PingDialogContents";

export default function Addping() {
    //모달창 op/cl
    const [open, setOpen] = useState(false); 
    const [ping, setPing] = useState<Ping>({
        name: "",
        season: 0,
        tool: "",
        skill: ""
    });

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleSave = async () => {
       // await charaterApi에서 addping 받아오기
       await addPing(ping);
       loadPingData();
       setPing({
            name: "",
            season: 0,
            tool: "",
            skill: ""
       });
       handleClose();
    };

    return (
        <>
            <Button onClick={handleOpen}>티니핑 추가</Button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>티니핑 추가</DialogTitle>
                <DialogContent>
                    <PingDialogContents
                        ping={ping}
                        handleChange={(e: React.ChangeEvent<HTMLInputElement>) => setPing({...ping, [e.target.name]: e.target.value})}
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