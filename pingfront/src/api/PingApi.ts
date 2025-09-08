import axios, { type AxiosRequestConfig } from "axios";
import type { Ping } from "../type";

const BASE_URL = import.meta.env.VITE_API_URL;
const getAxiosConfig = (): AxiosRequestConfig => {
    const token = sessionStorage.getItem('jwt');
    return {
        headers: {
            'Authorization': token
        }
    }
}


// //캐릭터 목록 조회
export const getPing = async (): Promise<Ping[]> => {
    const res = await axios.get(`${BASE_URL}/pings`, getAxiosConfig());
    console.log('pingApi 조회 : '+res.data);
    return res.data;
}


// //캐릭터 생성
export const addPing = async (formData: FormData): Promise<Ping> => {
    const res = await axios.post(`${BASE_URL}/pings`, formData, getAxiosConfig());
    return res.data;
}
// //캐릭터 수정
export const editPing = async (ping: Ping): Promise<Ping> => {
    const res = await axios.put(`${BASE_URL}/pings`, ping, getAxiosConfig());
    return res.data;
}
// //캐릭터 삭제
export const deletePing = async (id: number): Promise<Ping> => {
    const res = await axios.delete(`${BASE_URL}/pings/${id}`, getAxiosConfig());
    return res.data;
}

// 시즌별 조회
export const seasonPing = async (seasonNumber: string): Promise<Ping> => {
    const res = await axios.get(`${BASE_URL}/season/${seasonNumber}`, getAxiosConfig());
    console.log('pingApi 조회(season) : '+res.data.image+" + "+res.data.name);
    return res.data;
}