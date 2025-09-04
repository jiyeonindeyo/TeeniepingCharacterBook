
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
        motive: "고양이",
        season: 0,
        tool: "사랑의 매",
        skill: "사자후"
    }];

    


    return(
        <>
            <table>
                <tbody>
                    {
                    data.map((item) =>
                        <tr key={item.id}>
                            <td>{item.name}</td>
                            <td>{item.motive}</td>
                            <td>{item.season}</td>
                            <td>{item.tool}</td>
                            <td>{item.skill}</td>
                        </tr>)
                    }
                </tbody>
            </table>
        </>
    );
};

