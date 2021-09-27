import React from "react";
import styled from "styled-components";
import { Overlay } from ".";
import { getIsShownLoading } from "../../reducks/loading/selectors";
import { useSelector } from "../../reducks/store/store";

const Loading: React.FC = () => {
    const selector = useSelector();
    const isShown = getIsShownLoading(selector.loading);

    return (
        <>
            {isShown && (
                <>
                    <Overlay style={OverlayStyle} />
                    <LoadingAnimeWrapper>
                        <div className="box1"></div>
                        <div className="box2"></div>
                        <div className="box3"></div>
                        <div className="box4"></div>
                    </LoadingAnimeWrapper>
                </>
            )}
        </>
    );
};

const LoadingParams = {
    w: 96,
    h: 112,
    speed: 1.5,
};

const LoadingValues = {
    w: LoadingParams.w + "px",
    h: LoadingParams.h + "px",
    xspace: LoadingParams.w / 2,
    yspace: LoadingParams.h / 4 - 1,
    speed: LoadingParams.speed + "s",
};

const LoadingAnimeWrapper = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-${LoadingValues.h}, -${LoadingValues.w});
    z-index: 9999;

    div {
        width: ${LoadingValues.w};
        height: ${LoadingValues.h};
        position: absolute;
        transition: all ease 0.3s;
        background: url('data:image/svg+xml;utf-8,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 612 684"%3E%3Cpath fill="%23010101" d="M305.7 0L0 170.9v342.3L305.7 684 612 513.2V170.9L305.7 0z"/%3E%3Cpath fill="%23fff" d="M305.7 80.1l-233.6 131 233.6 131 234.2-131-234.2-131"/%3E%3C/svg%3E')
            no-repeat top center;
    }

    .box1 {
        animation: tetromino1 ${LoadingValues.speed} ease-out infinite;
    }
    .box2 {
        animation: tetromino2 ${LoadingValues.speed} ease-out infinite;
    }
    .box3 {
        animation: tetromino3 ${LoadingValues.speed} ease-out infinite;
        z-index: 2;
    }
    .box4 {
        animation: tetromino4 ${LoadingValues.speed} ease-out infinite;
    }

    @keyframes tetromino1 {
        0%,
        40% {
            /* compose logo */ /* 1 on 3 */ /* L-shape */
            transform: translate(0, 0);
        }
        50% {
            /* pre-box */
            transform: translate(
                ${LoadingValues.xspace}px,
                -${LoadingValues.yspace}px
            );
        }
        60%,
        100% {
            /* box */ /* compose logo */
            transform: translate(${LoadingValues.xspace * 2}px, 0);
        }
    }

    @keyframes tetromino2 {
        0%,
        20% {
            /* compose logo */ /* 1 on 3 */
            transform: translate(${LoadingValues.xspace * 2}px, 0px);
        }
        40%,
        100% {
            /* L-shape */ /* box */ /* compose logo */
            transform: translate(
                ${LoadingValues.xspace * 3}px,
                ${LoadingValues.yspace}px
            );
        }
    }

    @keyframes tetromino3 {
        0% {
            /* compose logo */
            transform: translate(
                ${LoadingValues.xspace * 3}px,
                ${LoadingValues.yspace}px
            );
        }
        20%,
        60% {
            /* 1 on 3 */ /* L-shape */ /* box */
            transform: translate(
                ${LoadingValues.xspace * 2}px,
                ${LoadingValues.yspace * 2}px
            );
        }
        90%,
        100% {
            /* compose logo */
            transform: translate(
                ${LoadingValues.xspace}px,
                ${LoadingValues.yspace}px
            );
        }
    }

    @keyframes tetromino4 {
        0%,
        60% {
            /* compose logo */ /* 1 on 3 */ /* L-shape */ /* box */
            transform: translate(
                ${LoadingValues.xspace}px,
                ${LoadingValues.yspace}px
            );
        }
        90%,
        100% {
            /* compose logo */
            transform: translate(0, 0);
        }
    }
`;

const OverlayStyle = {
    background: "rgba(0,0,0,0.4)",
    zIndex: "9990",
};

export default Loading;
