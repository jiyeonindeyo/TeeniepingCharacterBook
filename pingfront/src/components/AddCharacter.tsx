// import { useState } from "react";
// import type { Character } from "../type";
// import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from "@mui/material";
// import CharacterDialogContents from "./CharacterDialogContents";

// export default function AddCharacter() {
//     //모달창 op/cl
//     const [open, setOpen] = useState(false); 
//     const [charcter, setCharcter] = useState<Character>({
//         name: "",
//         motive: "",
//         season: 0,
//         tool: "",
//         skill: ""
//     });

//     const handleOpen = () => setOpen(true);
//     const handleClose = () => setOpen(false);

//     const handleSave = async () => {
//        // await charaterApi에서 addCharacter 받아오기
//     };

//     return (
//         <>
//             <Button onClick={handleOpen}>티니핑 추가</Button>
//             <Dialog open={open} onClose={handleClose}>
//                 <DialogTitle>티니핑 추가</DialogTitle>
//                 <DialogContent>
//                     <CharacterDialogContents />
//                 </DialogContent>
//                 <DialogActions>
//                     <Button onClick={handleSave}>저장</Button>
//                     <Button onClick={handleClose}>취소</Button>
//                 </DialogActions>
//             </Dialog>
//         </>
//     )
// }