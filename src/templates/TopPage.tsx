import styled from "styled-components";
import { path } from "../components/Common/Route";
import { Subtitle, Title, DescText, Link01 } from "../components/Common";

const TopPage = () => {
    const test = localStorage.getItem("persist:root");
    console.log(test); 
    return (
        <>
            <Wrapper>
                <Title>
                    アンサーBOX
                    <span>~謎解き脱出ゲーム~</span>
                </Title>

                <Container>
                    <Subtitle>
                        Introduction<span>はじめに</span>
                        <DescText>
                            謎解き脱出ゲーム「アンサーBOX」は、
                            一つの部屋で次々に出題される謎を解き明かす、単純なルールの謎解きゲームです。
                            答えを入力するのではなく、設置されたモノと
                            <span>アンサーボックス</span>
                            を使って解答していただきます。
                        </DescText>
                    </Subtitle>
                </Container>

                <Container>
                    <Subtitle>
                        Rule<span>ルール</span>
                    </Subtitle>
                    <DescText>
                        全部で5つのステージで構成されており、部屋内のスクリーンに表示される謎を解く。謎の答えは部屋内にあり、それを
                        <span>アンサーボックス</span>に入れることで回答できる。
                        正解であれば次の謎が表示される。部屋内のすべての謎を解き明かし、脱出せよ。
                    </DescText>
                </Container>

                <Link01 to={path.stage1} style={LinkStyle}>
                    GAME START
                </Link01>
            </Wrapper>
            <Copyright>
                <small>&copy;2021 tt-tt-c</small>
            </Copyright>
        </>
    );
};

const Wrapper = styled.section`
    padding: 50px calc(50% - 540px) 100px;
    text-align: center;
`;

const Container = styled.div`
    margin-top: 80px;
`;

const LinkStyle = {
    margin: "100px auto 0",
    width: "60%",
    padding: "1.5rem 0",
    border: "1px solid #fff",
};

const Copyright = styled.p`
    font-size: 14px;
    line-height: 4;
    text-align: center;
    color: #000;
    background-color: #fff;
`;

export default TopPage;
