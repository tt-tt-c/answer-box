import React from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router";
import styled from "styled-components";
import { modalsActions } from "../../reducks/modals/actions";
import { getRightOrWrongModalState } from "../../reducks/modals/selectors";
import { useSelector } from "../../reducks/store/store";
import { Overlay } from "../Common";
import { path, path2, StageNum } from "../Common/Route";
import { icon_01, icon_02, icon_08, icon_09 } from "../../assets/img";
import { loadingActions } from "../../reducks/loading/actions";
import { stageActions } from "../../reducks/store/actions";
import { push } from "connected-react-router";

const RightOrWrongModal = () => {
    const selector = useSelector();
    const { stageId } = useParams<{ stageId: StageNum }>();
    const rightOrWrongModal = getRightOrWrongModalState(selector.modals);
    const isShown = rightOrWrongModal.isShown;
    const isCorrect = rightOrWrongModal.isCorrect;
    const stageAction = stageActions[stageId];
    const dispatch = useDispatch();

    return (
        <>
            {isShown && (
                <>
                    <Overlay />
                    <ModalWrapper>
                        <Icon src={isCorrect ? icon_08 : icon_09} />
                        <NextButton
                            onClick={() => {                                
                                dispatch(loadingActions.showLoading());
                                dispatch(modalsActions.hideRightOrWrongModal());
                                dispatch(stageAction.releaseSelectedItem());
                                if(isCorrect) dispatch(push(`${path[`stage${stageId}`]}/${path2.mysterySlide}`));
                                dispatch(loadingActions.hideLoading());
                            }}
                        >
                            <span>{isCorrect ? "次の問題へ" : "戻る"}</span>
                            <i/>
                        </NextButton>
                    </ModalWrapper>
                </>
            )}
        </>
    );
};

export default RightOrWrongModal;

const ModalWrapper = styled.div`
    position: fixed;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: auto;
    min-width: 400px;
    height: auto;
    background: transparent;
    padding: 20px;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    z-index: 9991;
    img {
        animation: popup 1s cubic-bezier(0.25, 1, 0.5, 1) 1 forwards;
    }
    @keyframes zoomIn {
        0% {
            transform: scale(0.8);
            opacity: 0;
        }
        100% {
            opacity: 1;
            transform: scale(1);
        }
    }
    @keyframes popup {
        0% {
            transform: translateY(40px) scale(0.4);
            opacity: 0;
        }
        100% {
            transform: translateY(0) scale(1);
        }
        80%,
        100% {
            opacity: 1;
        }
    }
`;

const Icon = styled.img`
    display: block;
    width: 500px;
    height: 500px;
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
    -webkit-transition: all .3s;
    transition: all .3s;
    text-align: center;
    text-decoration: none;
    letter-spacing: .1em;
    color: #212529;
    border-radius: .5rem;
    outline: 0;
    border: 1px solid #FFF;
    color: #fff;
    min-width: 400px;
    animation: show 2s ease 0.5s 1 alternate forwards running;
    opacity: 0;
    visibility: hidden;

    span {
        position: relative;
    }
    :hover {color: #000;}

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
        background: #FFF;
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

    @keyframes show {
        0% {
            opacity: 0;
            visibility: hidden;
        }
        100% {
            opacity: 1;
            visibility: visible;
        }
    }
`;
