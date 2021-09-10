import React from "react";
import styled from "styled-components";

type Props = {
    onClick: Function;
    boxShadowColor: string;
    buttonColor: string;
    style?: {
        [k in string]: string;
    };
    isDisabled?: boolean;
};

const Button01: React.FC<Props> = ({
    style,
    boxShadowColor,
    buttonColor,
    onClick,
    isDisabled = false,
    children,
}) => {
    return (
        <Wrapper
            boxShadowColor={boxShadowColor}
            buttonColor={buttonColor}
            isDisabled={isDisabled}
            style={style}
            onClick={() => onClick()}
            disabled={isDisabled}
        >
            {children}
        </Wrapper>
    );
};

export default Button01;

const Wrapper = styled.button<{
    boxShadowColor: string;
    buttonColor: string;
    isDisabled: boolean;
}>`
    cursor: ${({ isDisabled }) => (isDisabled ? `inherit` : "pointer")};
    opacity: ${({ isDisabled }) => (isDisabled ? `0.5` : "1")};
    -webkit-box-shadow: ${({ boxShadowColor }) =>
        boxShadowColor ? `0 5px 0 ${boxShadowColor}` : "inherit"};
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
