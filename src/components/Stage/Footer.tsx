import React from "react";
import styled from "styled-components";
import { Button01, Toggle } from "../Common";

const Footer = () => {
    return (
        <Wrapper>
            <footer>
                <MenuWrapper>
                    <li>
                        <MenuTitle>選択中のモノ</MenuTitle>
                        <SelectedThingWrapper>
                            
                        </SelectedThingWrapper>
                    </li>
                    <li>
                        <MenuTitle>Releaseボタン</MenuTitle>
                        <Container>
                            <Button01
                                buttonColor={"#FF0000"}
                                boxShadowColor={"#FFFFFF"}
                                onClick={() =>
                                    console.log("click release button")
                                }
                            >
                                RELEASE
                            </Button01>
                        </Container>
                    </li>
                    <li>
                        <MenuTitle>選択モード切り替え</MenuTitle>
                        <Container>
                            <Toggle
                                onChange={(e) => console.log(e.target.checked)}
                            ></Toggle>
                        </Container>
                    </li>
                </MenuWrapper>
            </footer>
        </Wrapper>
    );
};
const Wrapper = styled.div`
    position: fixed;
    z-index: 10;
    bottom: 0;
    left: 0%;
    box-sizing: border-box;
    width: 100%;
    height: 180px;
    padding: 0 calc(50% - 400px);
    background-color: #000;
    box-shadow: 0 -1px 5px 0 #ccc;
    footer {
        box-sizing: border-box;
        width: 100%;
        border-color: #fff;
        border-style: solid;
        border-width: 0 5px;
        height: 100%;
    }
`;

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 120px;
`;
const SelectedThingWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 120px;
    width: 120px;
    border-radius: 5px;
    border: 5px solid #ccc;
`;

const MenuWrapper = styled.ul`
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-around;
    padding: 10px 0 0;
    height: 100%;
    box-sizing: border-box;
    li {
        height: 100%;
        width: 30%;
        display: flex;
        flex-flow: column nowrap;
        align-items: center;
    }
`;

const MenuTitle = styled.p`
    font-size: 20px;
    text-align: center;
    margin-bottom: 10px;
`;

export default Footer;
