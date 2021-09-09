import React from "react";
import styled from "styled-components";
import { icon_04 } from "../../assets/img";
import { Link01 } from "../Common";
import { path2 } from "../Common/Route";

type Props = {
    closeFunc: Function;
};

const DrawerMenu: React.FC<Props> = ({ closeFunc }) => {
    return (
        <Wrapper>
            <CloseButton type={"button"} onClick={() => closeFunc()} />
            <LinkWrapper>
                <li><Link01 to={path2.storage} style={LinkStyle}>ものおき</Link01></li>
                <li><Link01 to={`${path2.smallRoom}/A`} style={LinkStyle}>RoomA</Link01></li>
                <li><Link01 to={`${path2.smallRoom}/B`} style={LinkStyle}>RoomB</Link01></li>
                <li><Link01 to={path2.answerBox} style={LinkStyle}>アンサーボックス</Link01></li>
                <li><Link01 to={path2.mysterySlide} style={LinkStyle}>謎解き</Link01></li>
            </LinkWrapper>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    box-sizing: border-box;
    width: 400px;
    height: 100vh;
    padding: 100px 20px 50px;
    background: rgba(0, 0, 0, 1);
    z-index: 3000;
    box-shadow: -5px 0 5px #ccc;
`;

const CloseButton = styled.input`
    position: absolute;
    top: 20px;
    left: 20px;
    cursor: pointer;
    display: block;
    box-sizing: border-box;
    border: 0;
    padding: 0;
    margin: 0;
    width: 60px;
    height: 60px;
    background: center/60px 60px url(${icon_04}) no-repeat;
    outline: none;
    transition: opacity 0.3s;
    :hover {
        opacity: 0.5;
    }
`;

const LinkWrapper = styled.ul`
    height: 100%;
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-around;
`;

const LinkStyle = {
    textAlign: "center",
    margin: "0 auto",
    width: "100%",
    padding: "1.5rem 0",
    border: "1px solid #fff",
};

export default DrawerMenu;
