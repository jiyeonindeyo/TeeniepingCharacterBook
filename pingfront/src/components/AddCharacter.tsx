import { useState } from "react";
import type { Character } from "../type";
import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from "@mui/material";
import CharacterDialogContents from "./CharacterDialogContents";

export default function AddCharacter() {
    //모달창 op/cl
    const [open, setOpen] = useState(false); 
    const [character, setCharcter] = useState<Character>({
        name: "",
        season: 0,
        tool: "",
        skill: ""
    });

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleSave = async () => {
       // await charaterApi에서 addCharacter 받아오기
       await addCharacter(character);
       loadCharacterData();
       setCharcter({
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
                    <CharacterDialogContents 
                        character={character}
                        handleChange={(e: React.ChangeEvent<HTMLInputElement>) => setCharcter({...character, [e.target.name]: e.target.value})}
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