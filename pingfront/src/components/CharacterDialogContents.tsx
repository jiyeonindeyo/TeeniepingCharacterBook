import { Stack, TextField } from "@mui/material";
import type { Character } from "../type";

type CharacterDialogContentsProps = {
    character: Character;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function CharacterDialogContents({character, handleChange}: CharacterDialogContentsProps) {
    return (
        <>
        <Stack spacing={2} mt={1}>
                <TextField 
                    label="번호"
                    name="id"
                    value={character.id}
                    onChange={handleChange}
                />
                <TextField 
                    label="이름"
                    name="name"
                    value={character.name}
                    onChange={handleChange}
                />
                <TextField 
                    label="시즌"
                    name="season"
                    value={character.season}
                    onChange={handleChange}
                />
                <TextField 
                    label="도구"
                    name="tool"
                    value={character.tool}
                    onChange={handleChange}
                />
                <TextField 
                    label="스킬"
                    name="skill"
                    value={character.skill}
                    onChange={handleChange}
                />
            </Stack>
        </>
    );
}