import React from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router";
import styled from "styled-components";
import { modalsActions } from "../../reducks/modals/actions";
import { getStageClearModalState } from "../../reducks/modals/selectors";
import { useSelector } from "../../reducks/store/store";
import { Overlay } from "../Common";
import { StageNum } from "../Common/Route";
import {
    icon_01,
    icon_02,
    bg_04,
    icon_10,
    icon_11,
    icon_12,
    icon_13,
    icon_14,
} from "../../assets/img";
import { loadingActions } from "../../reducks/loading/actions";
import { stageActions } from "../../reducks/store/actions";
import { push } from "connected-react-router";

const stageIcons = {
    1: icon_10,
    2: icon_11,
    3: icon_12,
    4: icon_13,
    5: icon_14,
};

const CleaModal = () => {
    const selector = useSelector();
    const { stageId } = useParams<{ stageId: StageNum }>();
    const stageAction = stageActions[stageId];
    const clearModalState = getStageClearModalState(selector.modals);
    const isShown = clearModalState.isShown;
    const dispatch = useDispatch();
    const stageIcon = stageIcons[stageId];
    const nextPath = {
        1: "/stage/2",
        2: "/stage/3",
        3: "/stage/4",
        4: "/stage/5",
        5: "/game-clear",
    };

    return (
        <>
            {isShown && (
                <>
                    <Overlay style={OverlayStyle} />
                    <ModalWrapper>
                        <TextWrapper>
                            <img src={stageIcon} alt="stage" />
                        </TextWrapper>
                        <NextButton
                            onClick={() => {
                                dispatch(loadingActions.showLoading());
                                dispatch(modalsActions.hideStageClearModal());
                                dispatch(stageAction.releaseSelectedItem());
                                dispatch(stageAction.updateIsCleared(true));
                                dispatch(push(nextPath[stageId]));
                                dispatch(loadingActions.hideLoading());
                            }}
                        >
                            <span>{`Next Stage`}</span>
                            <i />
                        </NextButton>
                    </ModalWrapper>
                </>
            )}
        </>
    );
};

export default CleaModal;

const OverlayStyle = {
    background: "rgba(30,30,30,0.8)",
    zIndex: "9990",
};

const ModalWrapper = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: auto;
    min-width: 400px;
    height: auto;
    /* background: rgba(50, 50, 50, 1); */
    padding: 60px 50px;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    z-index: 9991;
    > div {
        animation: zoomIn 1s cubic-bezier(0.25, 1, 0.5, 1) 1 forwards;
    }
    @keyframes zoomIn {
        0% {
            transform: scale(0.5);
            opacity: 0;
        }
        100% {
            opacity: 1;
            transform: scale(1);
        }
    }
`;

const TextWrapper = styled.div`
    display: block;
    width: 591px;
    height: ${(591 * 301) / 591}px;
    background: center/cover url(${bg_04}) no-repeat;
    position: relative;
    img {
        box-sizing: border-box;
        display: block;
        position: absolute;
        top: -50px;
        right: -10px;
        width: 170px;
        height: 170px;
    }
`;

const NextButton = styled.button`
    overflow: hidden;
    padding: 1.5rem 6rem;
    width: auto;
    color: #fff;
    border-radius: 0;
    background: #000;
    font-size: 1.6rem;
    font-weight: 700;
    line-height: 1.5;
    position: relative;
    display: inline-block;
    padding: 1rem 4rem;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    -webkit-transition: all 0.3s;
    transition: all 0.3s;
    text-align: center;
    text-decoration: none;
    letter-spacing: 0.1em;
    color: #212529;
    border-radius: 0.5rem;
    outline: 0;
    border: 1px solid #fff;
    color: #fff;
    min-width: 400px;
    margin-top: 50px;

    span {
        position: relative;
    }
    :hover {
        color: #000;
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
        background: #fff;
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
        background: center/ 20px auto no-repeat url(${icon_02});
    }
    :hover i:before {
        background-image: url(${icon_01});
    }
`;
