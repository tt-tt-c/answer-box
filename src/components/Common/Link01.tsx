import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { icon_01, icon_02 } from "../../assets/img";

type Props = {
    to: string;
    style: {
        [key: string] : string;
    }
};

const Link01: React.FC<Props> = ({ to, style, children }) => {
    return (
        <AppLink style={style} to={to}>
            <span>{children}</span>
            <i />
        </AppLink>
    );
};

export default Link01;

const AppLink = styled(Link)`
    box-sizing: border-box;
    display: table;
    position: relative;
    overflow: hidden;
    color: #000;
    border-radius: 0;
    background: #ccc;
    font-size: 24px;
    text-decoration: none;
    span {
        position: relative;
    }

    :hover {
        color: #fff;
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
        -webkit-transform: translateX(-95%);
        transform: translateX(-95%);
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
