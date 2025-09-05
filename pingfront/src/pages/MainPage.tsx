import { useEffect, useState } from "react";
import { getPing } from "../api/PingApi";
import PingBox from "../components/PingBox";
import type { Ping } from "../type";
import { Toolbar } from "@mui/material";
import Addping from "../components/AddPing";


export default function MainPage(){
    /*header*/
    //페이지 name
    //내비게이션 바
    //로그인 or 로그아웃
    
    /*게시판 모달 구성*/
    //이미지
    //이름
    const [ping, setPing] = useState<Ping[]>([]);

    const loadPingData = () => {
        getPing()
        .then(res => setPing(res))
        .catch(err => console.log(err));
    };
    useEffect(() => {
        loadPingData();
    }, []);

    return(
        <>
            <Toolbar sx={{ justifyContent: 'flex-end'}}>
                <Addping loadPingData={loadPingData}/>
            </Toolbar>
            <PingBox data={ping} loadPingData={loadPingData}/>
        </>
    );
};

