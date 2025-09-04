import axios from "axios";
import type { Character } from "../type";

const BASE_URL = import.meta.env.VITE_API_URL;

//토큰 다 하고 봉인해제
// const getAxiosConfig = (): AxiosRequestConfig => {
//     const token = sessionStorage.getItem('jwt');
//     return {
//         headers: {
//             'Authorization': token
//         }
//     }
// }


// //캐릭터 목록 조회
// export const getCharacter = async (): Promise<Character[]> => {
//     const res = await axios.get("url");
//     return res.data;
// }

// //캐릭터 생성
export const addCharacter = async (character: Character): Promise<Character> => {
    const res = await axios.post(`${BASE_URL}`, character);
    return res.data;
}
// //캐릭터 수정
export const editCharacter = async (character: Character): Promise<Character> => {
    const res = await axios.get(`${BASE_URL}`, character);
    return res.data;
}
// //캐릭터 삭제
export const deleteCharacter = async (id: number): Promise<Character> => {
    const res = await axios.delete(`${BASE_URL}`);
    return res.data;
}