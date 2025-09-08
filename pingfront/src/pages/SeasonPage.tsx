import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { seasonPing } from "../api/PingApi";
import PingBox from "../components/PingBox";
import type { Ping } from "../type";
import { Toolbar} from "@mui/material";
import Addping from "../components/AddPing";

export default function SeasonPage() {
    const { seasonNumber } = useParams<{ seasonNumber: string }>();
    const [ping, setPing] = useState<Ping[]>([]);

    const loadPingData = () => {
        // seasonNumber가 undefined일 경우 처리
        console.log('Season Number:', seasonNumber);
        if (!seasonNumber) {
            console.error("시즌 번호가 없습니다.");
            return;
        }
        
        seasonPing(seasonNumber)
            .then(res => {
                console.log('API 응답:', res); // 디버깅용
                setPing(res);
            })
            .catch(err => {
                console.error("시즌 데이터 로딩 실패:", err);
            });
    };
    useEffect(() => {
        loadPingData();
    }, [seasonNumber]);

    
    return (
        <>
            {/* 툴바 - 핑 추가 버튼 */}
            <Toolbar sx={{ justifyContent: 'flex-end' }}>
                <Addping loadPingData={loadPingData} />
            </Toolbar>
            <PingBox data={ping} loadPingData={loadPingData}/>
        </>
    );
}