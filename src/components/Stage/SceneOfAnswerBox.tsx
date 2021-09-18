import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router";
import styled from "styled-components";
import { AnswerBoxBtnModal } from ".";
import {
    answerBox_A,
    answerBox_B,
    answerBox_O,
    answerBox_X,
    icon_05,
    icon_06,
} from "../../assets/img";
import { loadingActions } from "../../reducks/loading/actions";
import { answerByItem } from "../../reducks/store/operations";
import {    
    getSelectedItem,
} from "../../reducks/store/selectors";
import { useSelector } from "../../reducks/store/store";
import { StageNum } from "../Common/Route";
import { AnswerButtonsModalState } from "./AnswerBoxBtnModal";

type Props = {
    availableBox?: {
        a: boolean;
        b: boolean;
        o: boolean;
        x: boolean;
    };
};

export const allAvailable = {
    a: true,
    b: true,
    o: true,
    x: true,
};

const SceneOfAnswerBox: React.FC<Props> = ({
    availableBox = { ...allAvailable },
}) => {
    const selector = useSelector();
    const { stageId } = useParams<{ stageId: StageNum }>();
    const initAnswerButtonsModalState: AnswerButtonsModalState = {
        isShowned: false,
        placeId: 1,
        isUsedSendButton: false,
        isOverlayClickable: true,
        doAnswerFunc: () => {},
        doSendFunc: () => {},
        closeFunc: () => {},
    };
    const [AnswerButtonsModalState, setAnswerButtonsModalState] =
        useState<AnswerButtonsModalState>(initAnswerButtonsModalState);    
    const selectedItem = getSelectedItem(stageId, selector);
    const isClickable = selectedItem !== null;
    const dispatch = useDispatch();

    const closeFunc = () => {
        setAnswerButtonsModalState({ ...initAnswerButtonsModalState });
    };

    const doAnswerFunc = (placeId: 1|2|3|4) => {
        dispatch(loadingActions.showLoading());
        closeFunc();
        dispatch(answerByItem(stageId, placeId));
        dispatch(loadingActions.hideLoading());
    };

    const answerBoxBtnClick = (placeId:1|2|3|4) => {

        if (isClickable) {
            const modalState = {
                ...initAnswerButtonsModalState,
            };
            modalState.placeId = placeId;
            modalState.isShowned = true;
            modalState.doAnswerFunc = () => doAnswerFunc(placeId);
            modalState.closeFunc = () => closeFunc();
            setAnswerButtonsModalState(modalState);
        }
    };

    return (
        <>
            <Wrapper>
                <AnswerSendButoonWrapper></AnswerSendButoonWrapper>
                <AnswerBoxWrapper isAvailable={availableBox.a}>
                    {availableBox.a && (
                        <AnswerBoxButtonWrapper>
                            <AnswerBoxButton
                                isClickable={isClickable}
                                onClick={() => answerBoxBtnClick(1)}
                            >
                                Aにいれる
                            </AnswerBoxButton>
                            <AnswerBoxDownIcon src={icon_05} alt="downLogo" />
                        </AnswerBoxButtonWrapper>
                    )}

                    <AnswerBoxImg
                        size={answerBoxImgParams.s}
                        src={answerBox_A}
                    />
                </AnswerBoxWrapper>
                <AnswerBoxWrapper isAvailable={availableBox.b}>
                    {availableBox.b && (
                        <AnswerBoxButtonWrapper>
                            <AnswerBoxButton
                                isClickable={isClickable}
                                onClick={() => answerBoxBtnClick(2)}
                            >
                                Bにいれる
                            </AnswerBoxButton>
                            <AnswerBoxDownIcon src={icon_05} alt="downLogo" />
                        </AnswerBoxButtonWrapper>
                    )}
                    <AnswerBoxImg
                        size={answerBoxImgParams.s}
                        src={answerBox_B}
                    />
                </AnswerBoxWrapper>
                <AnswerBoxWrapper isAvailable={availableBox.o}>
                    {availableBox.o && (
                        <AnswerBoxButtonWrapper>
                            <AnswerBoxButton
                                isClickable={isClickable}
                                onClick={() => answerBoxBtnClick(3)}
                            >
                                Oにいれる
                            </AnswerBoxButton>
                            <AnswerBoxDownIcon src={icon_05} alt="downLogo" />
                        </AnswerBoxButtonWrapper>
                    )}
                    <AnswerBoxImg
                        size={answerBoxImgParams.l}
                        src={answerBox_O}
                    />
                </AnswerBoxWrapper>
                <AnswerBoxWrapper isAvailable={availableBox.x}>
                    {availableBox.x && (
                        <AnswerBoxButtonWrapper>
                            <AnswerBoxButton
                                isClickable={isClickable}
                                onClick={() => answerBoxBtnClick(4)}
                            >
                                Xにいれる
                            </AnswerBoxButton>
                            <AnswerBoxDownIcon src={icon_05} alt="downLogo" />
                        </AnswerBoxButtonWrapper>
                    )}
                    <AnswerBoxImg
                        size={answerBoxImgParams.l}
                        src={answerBox_X}
                    />
                </AnswerBoxWrapper>
            </Wrapper>
            {AnswerButtonsModalState.isShowned && (
                <AnswerBoxBtnModal {...AnswerButtonsModalState} />
            )}
        </>
    );
};

const answerBoxImgParams = {
    s: 190,
    l: 200,
};

const Wrapper = styled.div`
    display: flex;
    justify-content: space-around;
    flex-flow: row wrap;    
    height: auto;
    width: 100%;
`;

const AnswerSendButoonWrapper = styled.ul`
    display: flex;
    flex-flow: column-reverse nowrap;
    justify-content: space-between;
`;

const AnswerBoxWrapper = styled.div<{ isAvailable: boolean }>`
    position: relative;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    justify-content: ${({ isAvailable }) =>
        isAvailable ? `space-between` : `flex-end`};
    ${({ isAvailable }) =>
        !isAvailable
            ? `
        ::after {
            content: "";
            position: absolute;
            bottom: 0;
            left: 50%;
            transform: translate(-50%, 0);
            width: 230px;
            height: 230px;
            background: center/cover url(${icon_06});
        }
    `
            : ``};
`;

const AnswerBoxButtonWrapper = styled.div`
    display: flex;
    flex-flow: column nowrap;
    justify-content: flex-start;
    align-items: center;
    width: 180px;
    height: 100px;
`;

const AnswerBoxImg = styled.img<{ size: number }>`
    display: block;
    width: ${({ size }) => (size ? `${size}px` : `100px`)};
    height: ${({ size }) => (size ? `${size}px` : `100px`)};
`;

const AnswerBoxButton = styled.button<{ isClickable: boolean }>`
    font-size: 16px;
    font-weight: 700;
    line-height: 1.5;
    width: 100%;
    box-sizing: border-box;
    position: relative;
    display: inline-block;
    padding: 10px;
    cursor: ${({ isClickable }) => (isClickable ? `pointer` : `inherit`)};
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    -webkit-transition: all 0.3s;
    transition: all 0.3s;
    text-align: center;
    vertical-align: middle;
    text-decoration: none;
    letter-spacing: 0.1em;
    color: #212529;
    border-radius: 0.5rem;
    color: #fff;
    background-color: #333;
    border: 0;

    :hover {
        opacity: ${({ isClickable }) => (isClickable ? `0.8` : `1`)};
    }
    :hover ~ img {
        ${({ isClickable }) =>
            isClickable ? `animation: flash 1s linear infinite;` : ``};
    }
    @keyframes flash {
        0% {
            opacity: 1;
        }

        50% {
            opacity: 0;
        }

        100% {
            opacity: 1;
        }
    }
`;
const AnswerBoxDownIcon = styled.img`
    margin-top: 10px;
    width: 40px;
    height: 40px;
`;

export default SceneOfAnswerBox;
