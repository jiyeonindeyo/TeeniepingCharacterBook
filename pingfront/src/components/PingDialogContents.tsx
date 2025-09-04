import { Stack, TextField } from "@mui/material";
import type { Ping } from "../type";

type PingDialogContentsProps = {
    ping: Ping;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function PingDialogContents({ping, handleChange}: PingDialogContentsProps) {
    return (
        <>
        <Stack spacing={2} mt={1}>
                <TextField 
                    label="번호"
                    name="id"
                    value={ping.id}
                    onChange={handleChange}
                />
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
        </>
    );
}