import type { Ping } from "../type";
import { useState } from "react";

export default function EditPing(){


    const [ping, setPing] = useState<Ping>({
        name: "",
        season: 0,
        tool: "",
        skill: ""
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;//어떤 값을 넣었는지
        const name = e.target.name;//어떤 입력창에
        setPing({...ping, [name]: value})//수정후 새객체
    }

    return (
        <>
        
        </>
    );
}