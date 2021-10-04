import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router";
import styled from "styled-components";
import { AnswerBoxBtnModal, TransparentBoxModal } from ".";
import {
    answerBox_A,
    answerBox_B,
    answerBox_O,
    answerBox_X,
    bg_06,
    bg_03,
    icon_05,
    icon_06,
    icon_15,
} from "../../assets/img";
import { getBlobUrl } from "../../function/common";
import { loadingActions } from "../../reducks/loading/actions";
import { stageActions } from "../../reducks/store/actions";
import { answerByItem, sendItem } from "../../reducks/store/operations";
import {
    getBoxA,
    getInTransparentBoxItem,
    getIsSelectMode,
    getSelectedItem,
} from "../../reducks/store/selectors";
import { useSelector } from "../../reducks/store/store";
import { StageNum } from "../Common/Route";
import { AnswerButtonsModalState } from "./AnswerBoxBtnModal";
import { inTransParentBoxState } from "./TransparentBoxModal";

type Props = {
    availableBox?: {
        a: boolean;
        b: boolean;
        o: boolean;
        x: boolean;
    };
    availableTransparentBox: boolean;
};

export const allAvailable = {
    a: true,
    b: true,
    o: true,
    x: true,
};

const SceneOfAnswerBox: React.FC<Props> = ({
    availableBox = { ...allAvailable },
    availableTransparentBox = false,
}) => {
    const selector = useSelector();
    const { stageId } = useParams<{ stageId: StageNum }>();
    const boxA = getBoxA(stageId, selector);
    const isSelectMode = getIsSelectMode(stageId, selector);

    const initAnswerButtonsModalState: AnswerButtonsModalState = {
        isShown: false,
        placeId: 1,
        isUsedSendButton: false,
        isOverlayClickable: true,
        doAnswerFunc: () => {},
        doSendFunc: () => {},
        closeFunc: () => {},
    };
    const [AnswerButtonsModalState, setAnswerButtonsModalState] =
        useState<AnswerButtonsModalState>(initAnswerButtonsModalState);
    const initTransParentBoxState: inTransParentBoxState = {
        isShown: false,
        isOverlayClickable: true,
        doFunc: () => {},
        closeFunc: () => {},
    };
    const [transparentBoxModalState, setTransparentBoxModalState] =
        useState<inTransParentBoxState>(initTransParentBoxState);
    const selectedItem = getSelectedItem(stageId, selector);
    const inTransparentBoxItem = getInTransparentBoxItem(stageId, selector);
    const isClickable = selectedItem !== null;
    const dispatch = useDispatch();

    const closeFunc = () => {
        setAnswerButtonsModalState({ ...initAnswerButtonsModalState });
    };

    const doAnswerFunc = (placeId: 1 | 2 | 3 | 4) => {
        dispatch(loadingActions.showLoading());
        closeFunc();
        dispatch(answerByItem(stageId, placeId));
        dispatch(loadingActions.hideLoading());
    };

    const doSendFunc = (placeId: 1 | 2 | 3 | 4) => {
        dispatch(loadingActions.showLoading());
        closeFunc();
        dispatch(sendItem(stageId, placeId));
        dispatch(loadingActions.hideLoading());
    };

    const answerBoxBtnClick = (placeId: 1 | 2 | 3 | 4) => {
        if (isClickable) {
            const modalState = {
                ...initAnswerButtonsModalState,
            };
            modalState.placeId = placeId;
            modalState.isShown = true;
            modalState.isUsedSendButton = /[4-5]/.test(stageId);
            modalState.doAnswerFunc = () => doAnswerFunc(placeId);
            modalState.doSendFunc = () => doSendFunc(placeId);
            modalState.closeFunc = () => closeFunc();
            setAnswerButtonsModalState(modalState);
        }
    };

    const transparentCloseFunc = () => {
        setTransparentBoxModalState({ ...initTransParentBoxState });
    };

    const transparentDoFunc = () => {
        dispatch(loadingActions.showLoading());
        transparentCloseFunc();
        dispatch(stageActions[stageId].releaseSelectedItem());
        if (selectedItem)
            dispatch(
                stageActions[stageId].updateInTransparentBoxItem({
                    ...selectedItem,
                })
            );
        dispatch(loadingActions.hideLoading());
    };

    const transparentBtnClickFunc = () => {
        if (isClickable) {
            const modalState = {
                ...initTransParentBoxState,
            };
            modalState.isShown = true;
            modalState.doFunc = () => transparentDoFunc();
            modalState.closeFunc = () => transparentCloseFunc();
            setTransparentBoxModalState(modalState);
        }
    };

    return (
        <>
            <Wrapper>
                {(boxA &&
                    boxA.id !== selectedItem?.id &&
                    boxA.id !== inTransparentBoxItem?.id)  && (
                    <AnswerBoxWrapper isAvailable={availableBox.a}>
                        {availableBox.a && (
                            <AnswerBoxButtonWrapper>
                                <AnswerBoxButton
                                    isClickable={isClickable}
                                    onClick={() => answerBoxBtnClick(1)}
                                >
                                    Aにいれる
                                </AnswerBoxButton>
                                <AnswerBoxDownIcon
                                    src={icon_05}
                                    alt="downLogo"
                                />
                            </AnswerBoxButtonWrapper>
                        )}

                        <AnswerBoxImg
                            isSelectMode={isSelectMode}
                            size={answerBoxImgParams.s}
                            src={answerBox_A}
                            onClick={() => {
                                if (isSelectMode && boxA) {
                                    dispatch(loadingActions.showLoading());
                                    dispatch(
                                        stageActions[
                                            stageId
                                        ].updateSelectedItem({
                                            id: boxA.id,
                                            name: boxA.name,
                                            img: boxA.img,
                                        })
                                    );
                                    dispatch(
                                        stageActions[stageId].updateSeleteMode(
                                            false
                                        )
                                    );
                                    dispatch(loadingActions.hideLoading());
                                }
                            }}
                        />
                    </AnswerBoxWrapper>
                )}
                {(!boxA ||
                    boxA.id === selectedItem?.id ||
                    boxA.id === inTransparentBoxItem?.id) && (
                    <AnswerBoxWrapper isAvailable={true}>
                        {availableBox.a && (
                            <AnswerBoxButtonWrapper>
                                <AnswerBoxButton
                                    isClickable={false}
                                    onClick={() => {}}
                                >
                                    Aにいれる
                                </AnswerBoxButton>
                                <AnswerBoxDownIcon
                                    src={icon_05}
                                    alt="downLogo"
                                />
                            </AnswerBoxButtonWrapper>
                        )}

                        <AnswerBoxImg size={answerBoxImgParams.s} src={bg_03} />
                    </AnswerBoxWrapper>
                )}
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
                <TransParentBoxWrapper
                    isClickable={isClickable}
                    isAvailable={availableTransparentBox}
                >
                    {availableTransparentBox && (
                        <AnswerBoxButtonWrapper>
                            <AnswerBoxButton
                                isClickable={isClickable}
                                onClick={() => transparentBtnClickFunc()}
                            >
                                容器にいれる
                            </AnswerBoxButton>
                            <AnswerBoxDownIcon src={icon_05} alt="downLogo" />
                            <ItemInBox
                                src={
                                    inTransparentBoxItem
                                        ? getBlobUrl(inTransparentBoxItem.img)
                                        : ""
                                }
                                alt="inTransparentBoxItem"
                            />
                        </AnswerBoxButtonWrapper>
                    )}
                    <AnswerBoxImg size={answerBoxImgParams.l} src={bg_06} />
                </TransParentBoxWrapper>
            </Wrapper>
            {AnswerButtonsModalState.isShown && (
                <AnswerBoxBtnModal {...AnswerButtonsModalState} />
            )}
            {transparentBoxModalState.isShown && (
                <TransparentBoxModal {...transparentBoxModalState} />
            )}
        </>
    );
};

const answerBoxImgParams = {
    s: 190,
    l: 200,
};

const Wrapper = styled.ul`
    display: flex;
    justify-content: space-between;
    flex-flow: row wrap;
    height: auto;
    width: 100%;
`;

const AnswerBoxWrapper = styled.li<{ isAvailable: boolean }>`
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
            width: 210px;
            height: 210px;
            background: center/cover url(${icon_06});
        }
    `
            : ``};
`;

const TransParentBoxWrapper = styled.li<{
    isAvailable: boolean;
    isClickable: boolean;
}>`
    position: relative;
    display: ${({ isAvailable }) => (isAvailable ? `flex` : ` none`)};
    flex-flow: column nowrap;
    align-items: center;
    justify-content: ${({ isClickable }) =>
        isClickable ? `space-between` : `flex-end`};
    ::after {
        content: "";
        position: absolute;
        bottom: 10px;
        left: 0;
        transform: translate(-100%, 0);
        width: 50px;
        height: 50px;
        background: center/cover url(${icon_15});
    }
`;

const ItemInBox = styled.img`
    display: block;
    width: 50%;
    position: absolute;
    bottom: 20px;
    left: 50%;
    transform: translate(-50%, 0);
`;

const AnswerBoxButtonWrapper = styled.div`
    display: flex;
    flex-flow: column nowrap;
    justify-content: flex-start;
    align-items: center;
    width: 180px;
    height: 100px;
`;

const AnswerBoxImg = styled.img<{ isSelectMode?: boolean; size: number }>`
    display: block;
    width: ${({ size }) => (size ? `${size}px` : `100px`)};
    height: ${({ size }) => (size ? `${size}px` : `100px`)};
    cursor: ${({ isSelectMode }) => (isSelectMode ? `pointer` : `inherit`)}; ;
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
