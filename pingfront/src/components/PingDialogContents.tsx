import { Box, Button, Stack, TextField } from "@mui/material";
import type { Ping } from "../type";
import { useState } from "react";
type PingDialogContentsProps = {
    ping: Ping;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};
export default function PingDialogContents({ ping, handleChange }: PingDialogContentsProps) {
    const [selectedFileName, setSelectedFileName] = useState<string | null>(null);
    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setSelectedFileName(file.name);
            // 여기서 파일 데이터를 상위로 전달하거나 상태로 저장할 수 있음
            console.log("선택된 파일:", file);
        }
    };
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
                    onChange={handleFileChange}
                />
            </Button>
            {selectedFileName && (
                <Box>선택된 파일: {selectedFileName}</Box>
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
                label="도구"
                name="tool"
                value={ping.tool}
                onChange={handleChange}
            />
            <TextField
                label="스킬"
                name="skill"
                value={ping.skill}
                onChange={handleChange}
            />
        </Stack>
    );
}