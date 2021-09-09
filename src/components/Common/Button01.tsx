import React from "react";
import styled from "styled-components";

type Props = {
    onClick: Function;
    boxShadowColor: string;
    buttonColor: string;
    style?: {
        [k in string]: string;
    };
};

const Button01: React.FC<Props> = ({
    style,
    boxShadowColor,
    buttonColor,
    onClick,
    children,
}) => {
    return (
        <Wrapper
            boxShadowColor={boxShadowColor}
            buttonColor={buttonColor}
            style={style}
            onClick={() => onClick()}
        >
            {children}
        </Wrapper>
    );
};

export default Button01;

const Wrapper = styled.button<{ boxShadowColor: string; buttonColor: string }>`
    cursor: pointer;
    font-size: 1.2rem;
    font-weight: 700;
    line-height: 1.5;
    border-radius: 50%;
    line-height: 80px;
    width: 100px;
    height: 100px;
    padding: 0;
    outline: none;
    border: 0;
    background-color: ${({ buttonColor }) =>
        buttonColor ? `${buttonColor}` : "inherit"};
    -webkit-box-shadow: ${({ boxShadowColor }) =>
        boxShadowColor ? `0 5px 0 ${boxShadowColor}` : "inherit"};
    box-shadow: ${({ boxShadowColor }) =>
        boxShadowColor ? `0 5px 0 ${boxShadowColor}` : "inherit"};

    :active {
        -webkit-transform: translate(0, 3px);
        transform: translate(0, 3px);
        -webkit-box-shadow: ${({ boxShadowColor }) =>
            boxShadowColor ? `0 2px 0 ${boxShadowColor}` : "inherit"};
        box-shadow: ${({ boxShadowColor }) =>
            boxShadowColor ? `0 2px 0 ${boxShadowColor}` : "inherit"};
    }
`;
