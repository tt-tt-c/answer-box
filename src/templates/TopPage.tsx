import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Path } from "../Route";
import { icon_01, icon_02 } from "../assets/img";

const TopPage = () => {
    return (
        <>
            <Wrapper>
                <Title>
                    アンサーBOX
                    <span>~謎解き脱出ゲーム~</span>
                </Title>

                <Container>
                    <Title2>
                        Introduction<span>はじめに</span>
                        <DescText>
                            謎解き脱出ゲーム「アンサーBOX」は、
                            一つの部屋で次々に出題される謎を解き明かす、単純なルールの謎解きゲームです。
                            答えを入力するのではなく、設置されたモノと
                            <span>アンサーボックス</span>
                            を使って解答していただきます。
                        </DescText>
                    </Title2>
                </Container>

                <Container>
                    <Title2>
                        Rule<span>ルール</span>
                    </Title2>
                    <DescText>
                        全部で5つのステージで構成されており、部屋内のスクリーンに表示される謎を解く。謎の答えは部屋内にあり、それを
                        <span>アンサーボックス</span>に入れることで回答できる。
                        正解であれば次の謎が表示される。部屋内のすべての謎を解き明かし、脱出せよ。
                    </DescText>
                </Container>

                <GameLink to={Path.stage1}>
                    <span>GAME START</span>
                    <i />
                </GameLink>
            </Wrapper>
        </>
    );
};

const Wrapper = styled.section`
    padding: 50px calc(50% - 540px);
    text-align: center;
`;

const Title = styled.h1`
    font-size: 54px;
    font-weight: 700;
    span {
        font-size: 38px;
        font-weight: 600;
        display: block;
        margin-top: 15px;
    }
`;

const Container = styled.div`
    margin-top: 80px;
`;

const Title2 = styled.h2`
    font-size: 38px;
    font-weight: 600;
    display: block;
    span {
        font-size: 18px;
        font-weight: 500;
        margin-top: 10px;
        display: block;
        color: #ccc;
    }
`;

const DescText = styled.p`
    box-sizing: border-box;
    text-align: left;
    text-indent: 1em;
    width: 60%;
    border: 2px dashed #ffffff;
    font-size: 18px;
    line-height: 1.6;
    margin: 20px auto 0;
    padding: 20px;
    span {
        display: inline;
        color: #ff0000;
    }
`;

const GameLink = styled(Link)`
    box-sizing: border-box;
    width: 60%;
    display: table;
    margin: 100px auto 0;
    position: relative;
    overflow: hidden;
    padding: 1.5rem 0;
    color: #000;
    border-radius: 0;
    border: 1px solid #FFF;
    background: #CCC;
    font-size: 24px;
    text-decoration: none;
    span {
        position: relative;
    }

    :hover {
        color: #FFF;
    }

    :before {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        content: "";
        -webkit-transition: all 0.5s ease-in-out;
        transition: all 0.5s ease-in-out;
        -webkit-transform: translateX(-96%);
        transform: translateX(-96%);
        background: #000;
    }

    :hover:before {
        -webkit-transform: translateX(0%);
        transform: translateX(0%);
    }
    i {
        -moz-osx-font-smoothing: grayscale;
        -webkit-font-smoothing: antialiased;
        display: inline-block;
        font-style: normal;
        font-variant: normal;
        text-rendering: auto;
        line-height: 1;
        position: absolute;
        height: 100%;
        top: 0;
        right: 1rem;
    }
    i:before {
        display: block;
        content: "";
        width: 20px;
        height: 100%;
        background: center/ 20px auto no-repeat url(${icon_01});
    }
    :hover i:before {
        background-image: url(${icon_02});
    }
`;

export default TopPage;
