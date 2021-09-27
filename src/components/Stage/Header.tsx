import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { DrawerMenu } from ".";
import { headerLogo, icon_03 } from "../../assets/img";
import { Overlay } from "../Common";
import { path } from "../Common/Route";

const Header: React.FC = () => {
    const [isShownDrawer, setIsShownDrawer] = useState(false);

    return (
        <Wrapper>
            <HeaderLogo>
                <Link to={path.top}>
                    <img
                        src={headerLogo}
                        alt="謎解き脱出ゲーム「アンサーBOX」"
                    />
                </Link>
            </HeaderLogo>
            <HambergerMenu type={"button"} onClick={() => setIsShownDrawer(true)} />

            {isShownDrawer && (<Overlay style={OverlayStyle} onClick={()=> {setIsShownDrawer(false)}}/>)}
            {isShownDrawer && (<DrawerMenu closeFunc={() => setIsShownDrawer(false)} />) }
        </Wrapper>
    );
};

const Wrapper = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    box-sizing: border-box;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
    height: 90px;
    padding: 0 calc(50% - 540px);
    background-color: #000;
    box-shadow: 0 1px 5px 0 #CCC;
    z-index: 20;
`;

const HeaderLogo = styled.h2`
    height: 100%;
    img {
        display: block;
        height: 100%;
    }
`;

const HambergerMenu = styled.input`
    cursor: pointer;
    display: block;
    box-sizing: border-box;
    border: 0;
    padding: 0;
    margin: 0;
    width: 60px;
    height: 60px;
    background: center/60px 60px url(${icon_03}) no-repeat;
    outline: none;
    transition: opacity 0.3s;
    :hover {
        opacity: 0.5;
    }
`;

const OverlayStyle = {
    background: "rgba(0,0,0,0.6)",
    zIndex: "2000",
}





export default Header;
