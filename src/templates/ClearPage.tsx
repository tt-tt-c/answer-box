import styled from "styled-components";
import { path } from "../components/Common/Route";
import { useDispatch } from "react-redux";
import { resetActions } from "../reducks/store/actions";
import { useSelector } from "../reducks/store/store";
import { getIsCleared } from "../reducks/stage5/selectors";
import { useEffect } from "react";
import { push } from "connected-react-router";
import { icon_01, icon_02, icon_16 } from "../assets/img";
import { loadingActions } from "../reducks/loading/actions";

const ClearPage = () => {
    const selector = useSelector();
    const dispatch = useDispatch();
    const isAllCleared = getIsCleared(selector.stage5);
    useEffect(() => {
        if (!isAllCleared) dispatch(push(path.top));
    }, [dispatch, isAllCleared]);

    return (
        <>
            {isAllCleared && (
                <>
                    <StageClearText>GAME CLEAR</StageClearText>
                    <ButtonWrapper>
                        <ResetButton
                            onClick={() => {
                                dispatch(loadingActions.showLoading());
                                dispatch(resetActions.AllReset());
                                localStorage.clear();
                                dispatch(loadingActions.hideLoading());
                            }}
                        ></ResetButton>
                        <NextButton
                            onClick={() => {
                                dispatch(loadingActions.showLoading());
                                dispatch(resetActions.AllReset());
                                localStorage.clear();
                                dispatch(push(path.top));
                                dispatch(loadingActions.hideLoading());
                            }}
                        >
                            <span>{`Topに戻る`}</span>
                            <i />
                        </NextButton>
                    </ButtonWrapper>
                    <VideoArea>
                        <VideoContent
                            id="video"
                            poster="http://localhost:3000/video_01_Moment.jpg"
                            webkit-playsinline
                            playsInline
                            muted
                            autoPlay
                            loop
                        >
                            <source
                                src={`http://localhost:3000/video_01.mp4`}
                                type="video/mp4"
                            />
                            <p>動画を再生できる環境ではありません。</p>
                        </VideoContent>
                    </VideoArea>
                </>
            )}
        </>
    );
};

const StageClearText = styled.h1`
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translateY(-50%) translateX(-50%);
    color: #fff;
    text-shadow: 0 0 15px #666;
    font-size: 7rem;
    opacity: 0;
    visibility: hidden;
    animation: show 2s ease 0.5s 1 alternate forwards running;
`;

const VideoArea = styled.div`
    position: fixed;
    z-index: -1;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    overflow: hidden;
`;

const VideoContent = styled.video`
    position: absolute;
    z-index: -1;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 177.77777778vh; /* 16:9 の幅→16 ÷ 9＝ 177.77% */
    height: 56.25vw; /* 16:9の幅 → 9 ÷ 16 = 56.25% */
    min-height: 100%;
    min-width: 100%;
`;

const ButtonWrapper = styled.div`
    position: absolute;
    top: 60%;
    left: 50%;
    transform: translateY(-50%) translateX(-50%);
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: stretch;
    animation: show 4s ease 0.5s 1 alternate forwards running;
    opacity: 0;
    visibility: hidden;
    -webkit-transition: all 0.3s;
    transition: all 0.3s;

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

const ResetButton = styled.button`
    box-sizing: border-box;
    width: 70px;
    height: 70px;
    font-size: 1.4rem;
    font-weight: 700;
    margin-right: 50px;
    cursor: pointer;
    color: #ff0000;
    outline: 0;
    border: 0;
    padding: 0;
    border-radius: 50%;
    background: center/70px 70px url(${icon_16}) #000 no-repeat;
    transition: all 0.3s;

    :hover {
        transform: rotate(-60deg);
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
    min-width: 300px;

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

export default ClearPage;
