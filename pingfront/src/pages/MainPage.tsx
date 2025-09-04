import { Box, Stack, Typography } from "@mui/material";

export default function MainPage(){
    /*header*/
    //페이지 name
    //내비게이션 바
    //로그인 or 로그아웃
    
    /*게시판 모달 구성*/
    //이미지
    //이름



    const data =[{
        id: 1,
        name: "예주",
        season: 1,
        tool: "도구1",
        skill: "스킬1"
    },
    {
        id: 2,
        name: "지연",
        season: 2,
        tool: "도구2",
        skill: "스킬3"
    },
    {
        id: 1,
        name: "현주쌤",
        season: 3,
        tool: "도구3",
        skill: "큐티"
    }];

    


    return(
        <>
            <Stack direction="row" spacing={2}>
                {data.map((item) => (
                <Box
                    key={item.id}
                    sx={{
                    width: '180px',
                    border: '1px solid #ccc',
                    borderRadius: '8px',
                    padding: '16px',
                    backgroundColor: '#fdfdfd',
                    }}
                >
                    <Typography><strong>이름:</strong> {item.name}</Typography>
                    <Typography><strong>시즌:</strong> {item.season}</Typography>
                    <Typography><strong>도구:</strong> {item.tool}</Typography>
                    <Typography><strong>스킬:</strong> {item.skill}</Typography>
                </Box>
                ))}
            </Stack>

        </>
    );
};

