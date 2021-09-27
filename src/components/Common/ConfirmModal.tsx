import React from "react";
import styled from "styled-components";
import { Overlay } from ".";

type Props = {
    confirmText: string;
    yesText?: string;
    noText?: string;
    doFunc: Function;
    closeFunc: Function;
    isOverlayClickable?: boolean;
};

export type ConfirmState = Props & { isShown: boolean };

const ConfirmModal: React.FC<Props> = ({
    confirmText,
    yesText = "YES",
    noText = "NO",
    doFunc,
    closeFunc,
    isOverlayClickable = false,
}) => {
    return (
        <>
            <Overlay
                onClick={() => {                    
                    if (isOverlayClickable) closeFunc();
                }}
            ></Overlay>
            <ConfirmWrapper>
                <ConfirmText>{confirmText}</ConfirmText>
                <SelectButtons>
                    <li>
                        <YesButton onClick={() => doFunc()}>
                            {yesText}
                        </YesButton>
                    </li>
                    <li>
                        <NoButton onClick={() => closeFunc()}>
                            {noText}
                        </NoButton>
                    </li>
                </SelectButtons>
            </ConfirmWrapper>
        </>
    );
};

const ConfirmWrapper = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 400px;
    height: auto;
    background: #fff;
    padding: 20px 20px 10px;
    border-radius: 5px;
    box-shadow: 1px 1px 1px 1px #ccc;
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-between;
    z-index: 9991;
`;

const ConfirmText = styled.p`
    font-size: 20px;
    line-height: 1.6;
    font-weight: 500;
    color: #000;
    text-align: center;
`;

const SelectButtons = styled.ul`
    display: flex;
    flex-flow: row nowrap;
    justify-content: right;
    margin-top: 20px;
    li {
        width: 100px;
        margin: 0 3px;
    }
`;

const YesButton = styled.button`
    cursor: pointer;
    font-weight: 600;
    line-height: 3;
    width: 100%;
    padding: 0;
    outline: none;
    border: 0;
    color: #fff;
    background: #4169e1;
    transition: opacity 0.3s;
    :hover {
        opacity: 0.8;
    }
`;

const NoButton = styled.button`
    cursor: pointer;
    font-weight: 600;
    line-height: 3;
    width: 100%;
    padding: 0;
    outline: none;
    border: 0;
    color: #fff;
    background: #c0c0c0;
    transition: opacity 0.3s;
    :hover {
        opacity: 0.8;
    }
`;

export default ConfirmModal;
