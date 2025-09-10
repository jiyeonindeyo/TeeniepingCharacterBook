import { Box, Button, Stack, TextField } from "@mui/material";
import type { Ping } from "../type";

type PingDialogContentsProps = {
    ping: Ping;
    selectedFileName: File | null;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleFileChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};
export default function PingDialogContents({ ping, handleChange, selectedFileName, handleFileChange }: PingDialogContentsProps) {
    
    return (
        <Stack spacing={2} mt={1}>
            {/* 파일 선택 버튼 */}
            
            <Button
                variant="outlined"
                component="label"
            >
                파일 선택
                <input
                    type="file"
                    hidden
                    name="image"
                    onChange={handleFileChange}
                    accept="image/*" // 이미지 파일만 선택하도록 제한
                />
            </Button>
            {selectedFileName && (
                <Box>선택된 파일: {selectedFileName.name}</Box>
            )}
            <TextField
                label="이름"
                name="name"
                value={ping.name}
                onChange={handleChange}
            />
            <TextField
                label="시즌"
                name="season"
                value={ping.season}
                onChange={handleChange}
            />
            <TextField
                label="소품"
                name="tool"
                value={ping.tool}
                onChange={handleChange}
            />
            <TextField
                label="종류"
                name="skill"
                value={ping.skill}
                onChange={handleChange}
            />
        </Stack>
    );
}