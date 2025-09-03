import axios from "axios";
import type { Character } from "../type";

//캐릭터 목록 조회
export const getCharacter = async (): Promise<Character[]> => {
    const res = await axios.get("url");
    return res.data;
}

//캐릭터 생성

//캐릭터 수정

//캐릭터 삭제